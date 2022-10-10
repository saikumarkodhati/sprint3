using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerAPP.Models;
using System.IO;
using System.Net.Http.Headers;
using Azure.Storage.Blobs;

namespace CustomerAPP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreateBookController : ControllerBase
    {
        BooksDBContext db = new BooksDBContext();
        [HttpGet]
        public IEnumerable<CreateBook> Get()
        {

            List<CreateBook> createBooks = db.CreateBooks.ToList();

            return createBooks.ToList();
        }
        [HttpPost, DisableRequestSizeLimit]
        [Route("Insert")]
        public async Task<IActionResult> Post([FromForm] createbookmodel Cbook)
        {
            var file = Request.Form.Files[0];
            var pathToSave = Directory.GetCurrentDirectory();
            var foldername = "Images";
            //  var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), foldername);

            if (file.Length > 0)
            {
                try
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var _filename = Path.GetFileNameWithoutExtension(fileName);
                    //var fullPath = Path.Combine(pathToSave, fileName);
                    // var dbPath = Path.Combine(foldername, fileName);

                    fileName = _filename + DateTime.Now.ToString("yyyyMMddHHmmss") + ".jpg";
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = fileName;

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    string connectionstring = "DefaultEndpointsProtocol=https;AccountName=testimage12;AccountKey=dqyCunF0hZ/QbJ7LO2xxxLSyBaGVmjzjyL5t5inmeVp102DgmUH4P9zX4iigRogfZAolVJNW/TCV+ASt1Jpgbw==;EndpointSuffix=core.windows.net";
                    string containerName = "images";
                    BlobContainerClient container = new BlobContainerClient(connectionstring, containerName);
                    var blob = container.GetBlobClient(fileName);
                    var blobstream = System.IO.File.OpenRead(fileName);
                    await blob.UploadAsync(blobstream);
                    var URI = blob.Uri.AbsoluteUri;
                    CreateBook createBook = new CreateBook();

                    createBook.Title = Cbook.Title;
                    createBook.Category = Cbook.Category;
                    // createbook.Image = createbook.Title;
                    createBook.Price = Cbook.Price;
                    createBook.Publisher = Cbook.Publisher;
                    createBook.Active = Cbook.Active;
                    createBook.Content = Cbook.Content;
                    createBook.Author = Cbook.Author;
                    createBook.ReleasedDate = Cbook.ReleasedDate;
                    createBook.Image = dbPath;

                    db.CreateBooks.Add(createBook);
                    db.SaveChanges();
                    var response = new { Status = "Success" };
                    return Ok(response);
                }
                catch (Exception ex)
                {
                    return BadRequest();
                }
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut, DisableRequestSizeLimit]
        public async Task<IActionResult> Put([FromForm] createbookmodel Cbook)
        {

            if (Cbook.Image == null)
            {
                string Name = db.CreateBooks.Where(u => u.Id == 1).Select(u => u.Image).SingleOrDefault();
            }
            else
            {

            }
            var file = Request.Form.Files[0];
            var pathToSave = Directory.GetCurrentDirectory();
            var foldername = "Images";
            //  var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), foldername);

            if (file.Length > 0)
            {

                try
                {

                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var _filename = Path.GetFileNameWithoutExtension(fileName);
                    //var fullPath = Path.Combine(pathToSave, fileName);
                    // var dbPath = Path.Combine(foldername, fileName);

                    fileName = _filename + DateTime.Now.ToString("yyyyMMddHHmmss") + ".jpg";
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = fileName;

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    string connectionstring = "DefaultEndpointsProtocol=https;AccountName=testimage12;AccountKey=dqyCunF0hZ/QbJ7LO2xxxLSyBaGVmjzjyL5t5inmeVp102DgmUH4P9zX4iigRogfZAolVJNW/TCV+ASt1Jpgbw==;EndpointSuffix=core.windows.net";
                    string containerName = "images";
                    BlobContainerClient container = new BlobContainerClient(connectionstring, containerName);
                    var blob = container.GetBlobClient(fileName);
                    var blobstream = System.IO.File.OpenRead(fileName);
                    await blob.UploadAsync(blobstream);
                    var URI = blob.Uri.AbsoluteUri;

                    CreateBook createBook = new CreateBook();

                    createBook.Title = Cbook.Title;
                    createBook.Category = Cbook.Category;
                    // createbook.Image = createbook.Title;
                    createBook.Price = Cbook.Price;
                    createBook.Publisher = Cbook.Publisher;
                    createBook.Active = Cbook.Active;
                    createBook.Content = Cbook.Content;
                    createBook.Author = Cbook.Author;
                    createBook.ReleasedDate = Cbook.ReleasedDate;
                    createBook.Image = dbPath;
                    createBook.Id = Cbook.Id;

                    db.CreateBooks.Add(createBook);
                    db.Entry(createBook).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    db.SaveChanges();
                    var response = new { Status = "Success" };
                    return Ok(response);
                }
                catch (Exception ex)
                {
                    return BadRequest();
                }
            }
            else
            {
                return BadRequest();
            }

        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var data = db.CreateBooks.Where(x => x.Id == id).FirstOrDefault();
            db.CreateBooks.Remove(data);
            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);
        }

        [HttpPost]
        [Route("Search")]
        public IActionResult Post(string author)
        {
            if (author == null)
            {
                return BadRequest("Invalid search options");
            }

            var searchResult = db.SearchBooks.Where(x => x.Author == author).FirstOrDefault();

            return Ok(searchResult);
        }


        [HttpGet]
        [Route("Details")]
        public IEnumerable<UserDetail> Get(int id)
        {
            List<UserDetail> searchResult = db.UserDetails.ToList();
            return searchResult;
        }

        [HttpPost, DisableRequestSizeLimit]
        [Route("InsertUserDetails")]
        public IActionResult Post(UserDetail userDetail)
        {
            db.UserDetails.Add(userDetail);
            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);

        }

        [HttpPost]
        [Route("Black")]
        public IEnumerable<UserDetail> Post(string block, int id)
        {

            List<UserDetail> searchResult = db.UserDetails.Where(x => x.Author == block).ToList();
            return searchResult;
        }
        [HttpPost]
        [Route("Unblack")]
        public IEnumerable<UserDetail> Post(string unblock, string block1)
        {
            List<UserDetail> searchResult = db.UserDetails.Where(x => x.Author == unblock).ToList();
            return searchResult;
        }
    }
}
