using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Mvc;

namespace Trestto.Dashboard.App.Controllers
{
    public class DashController : Controller
    {
        [HttpPost]
        public JsonResult VerificaLoja(string param)
        {
            var x = "aeaeae";
            return Json(x);
        }
    }
}