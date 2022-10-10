using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SupplierApp.Models;
using MassTransit;

namespace SupplierApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        BooksDBContext db;
        private readonly IBus bus;


        public BooksController(IBus _bus, BooksDBContext _db)
        {
            bus = _bus;
            db = _db;
        }


        [HttpGet]
        public async Task<IEnumerable<CreateBook>> Get()
        {
            List<CreateBook> createBooks = db.CreateBooks.ToList();
            Uri uri = new Uri("rabbitmq:localhost/orderQueue");
            var endpoint = await bus.GetSendEndpoint(uri);
            await endpoint.Send(createBooks);
            return createBooks.ToList();


        }
        [HttpPost]
        [Route("Search")]
        public IEnumerable<CreateBook> Post(string author, string titles, string publishera, string releasedate)
        {
            List<CreateBook> searchResult = db.CreateBooks.Where(x => x.Author == author || x.Title == titles || x.Publisher == publishera || x.ReleasedDate == releasedate).ToList();
            return searchResult;
        }

        [HttpGet]
        [Route("Details")]
        public IEnumerable<CreateBook> Get(int id)
        {
            List<CreateBook> searchResult = db.CreateBooks.Where(x => x.Id == id).ToList();
            return searchResult;
        }

        [HttpPost]
        public IActionResult Post([FromBody] SearchBook searchbook)
        {
            db.SearchBooks.Add(searchbook);
            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);
        }

        [HttpPut]
        public IActionResult Put(SearchBook searchbook)
        {
            db.SearchBooks.Add(searchbook);
            db.Entry(searchbook).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var data = db.SearchBooks.Where(x => x.Id == id).FirstOrDefault();
            db.SearchBooks.Remove(data);
            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);
        }
    }
}
