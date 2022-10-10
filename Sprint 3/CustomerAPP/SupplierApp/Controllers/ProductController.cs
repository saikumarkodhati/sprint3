using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SupplierApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SupplierApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        BooksDBContext db;

        public ProductController(BooksDBContext _db)
        {
            db = _db;
        }
        [HttpGet]
        [Route("get-products")]
        public IEnumerable<CreateBook> getProduct()
        {
            return db.CreateBooks;
        }
    }
}
