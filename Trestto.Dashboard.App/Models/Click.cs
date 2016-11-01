using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Trestto.Dashboard.App.Models
{
    public class Click
    {
        public string idLoja { get; set; }

        public string idFoto { get; set; }

        public DateTime? data { get; set; }

        public int idClick { get; set; }
    }
}