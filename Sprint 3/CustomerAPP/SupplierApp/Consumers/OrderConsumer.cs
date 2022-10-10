using MassTransit;
using Shared.Model;
using SupplierApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SupplierApp.Consumers
{
    public class OrderConsumer:IConsumer<Order>
    {
        BooksDBContext db = new BooksDBContext();
        public Task Consume(ConsumeContext<Order> context)
        {
            var data = context.Message;
            var productdata = db.CreateBooks.Where(x => x.Id == data.ProductId).FirstOrDefault();
          //  productdata.Id = productdata.Inventory - data.Inventory;
            db.CreateBooks.Update(productdata);
            db.SaveChanges();
            return Task.CompletedTask;
        }
    }
}
