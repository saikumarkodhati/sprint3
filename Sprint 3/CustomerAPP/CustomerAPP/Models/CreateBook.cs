﻿using System;
using System.Collections.Generic;

#nullable disable

namespace CustomerAPP.Models
{
    public partial class CreateBook
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public string Image { get; set; }
        public string Price { get; set; }
        public string Publisher { get; set; }
        public string Active { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
        public string ReleasedDate { get; set; }
    }
}
