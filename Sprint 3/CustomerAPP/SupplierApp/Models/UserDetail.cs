using System;
using System.Collections.Generic;

#nullable disable

namespace SupplierApp.Models
{
    public partial class UserDetail
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public string Price { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
        public string Publisher { get; set; }
        public string UserId { get; set; }
        public string Cardnumber { get; set; }
        public string Cardholdername { get; set; }
        public string Expiresdate { get; set; }
        public string Cvv { get; set; }
        public int? Block { get; set; }
    }
}
