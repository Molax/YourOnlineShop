using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Mvc;
using Lojaonline.DATA;
using System.Diagnostics;

namespace Trestto.Dashboard.App.Controllers
{
    public class DashController : Controller
    {
        [HttpPost]
        public JsonResult RetornaDado(List<Models.AlbumFotos> fotos)
        {


            using (var db = new LojaDataContext())
            {
                foreach (var item in fotos)
                {
                    var foto = db.Tables.Where(f => f.ID_FOTO == item.id).ToList();

                    if (foto.Count > 0)
                    {
                        foto.First().APARECE = item.aparece;
                        foto.First().FOTO_PERFIL = item.fotoperfil;
                        foto.First().FOTO_URL = item.foto;
                        foto.First().ID_LOJA = item.idloja;
                        foto.First().NAME = item.name;
                        foto.First().NOME_LOJA = item.nomeloja;
                        foto.First().NOME_PESSOA = item.nomepessoa;

                        db.SubmitChanges();
                    }

                    else
                    {
                        var dbFoto = new Lojaonline.DATA.Table
                        {
                            APARECE = item.aparece,
                            FOTO_PERFIL = item.fotoperfil,
                            ID_LOJA = item.idloja,
                            NAME = item.name,
                            NOME_LOJA = item.nomeloja,
                            NOME_PESSOA = item.nomepessoa,
                            FOTO_URL = item.foto,
                            ID_FOTO = item.id
                        };

                        db.Tables.InsertOnSubmit(dbFoto);

                        db.SubmitChanges();
                    }
                }
            }



            return Json(fotos);
        }

        [HttpPost]
        public JsonResult VerificaLoja(Models.param param)
        {
            List<Models.AlbumFotos> rFotos = new List<Models.AlbumFotos>();

            using (var db = new LojaDataContext())
            {
                var fotos = db.Tables.Where(f => f.NOME_LOJA == param.id && f.APARECE == "True").ToList();

                foreach (var item in fotos)
                {
                    rFotos.Add(new Models.AlbumFotos
                    {
                        aparece = item.APARECE,
                        foto = item.FOTO_URL,
                        fotoperfil = item.FOTO_PERFIL,
                        id = item.ID.ToString(),
                        idloja = item.ID_LOJA,
                        name = item.NAME,
                        nomeloja = item.NOME_LOJA,
                        nomepessoa = item.NOME_PESSOA,
                        hash = "#" + item.ID
                    });
                }
            }

            return Json(rFotos);
        }



        [HttpPost]
        public JsonResult GeraCsvClick(Models.Laura param)
        {
            List<Models.Click> rClick = new List<Models.Click>();
            using (var db = new LojaDataContext())
            {
                var idLoja = db.Tables.Where(f => f.NOME_LOJA == param.loja).First().ID_LOJA;

                var clicks = db.Clicks.Where(c => c.ID_LOJA == idLoja).ToList();
                foreach (var item in clicks)
                {
                    rClick.Add(new Models.Click {
                        data = item.DATA,
                        idClick = item.ID_CLICK,
                        idFoto = item.ID_FOTO,
                        idLoja = item.ID_LOJA
                    });
                }

                var path = System.IO.Path.GetDirectoryName(System.IO.Path.GetTempFileName());

                string pathCsv = path + "\\ArquivoClick.csv";


                List<string> output = new List<string>();

                foreach (var item in rClick)
                {
                    output.Add(item.idClick.ToString() + ", " + item.idFoto + "," + item.idLoja +","+ item.data.ToString() );
                }

                System.IO.File.WriteAllLines(pathCsv, output.ToArray());

                Process.Start(pathCsv);

            }

            return Json(rClick);
        }


        [HttpPost]
        public JsonResult GeraCsvReact(Models.Laura param)
        {
            List<Models.Quest> rClick = new List<Models.Quest>();
            using (var db = new LojaDataContext())
            {
                var idLoja = db.Tables.Where(f => f.NOME_LOJA == param.loja).First().ID_LOJA;

                var quests = db.Quests.Where(c => c.ID_LOJA == idLoja).ToList();

                foreach (var item in quests)
                {
                    rClick.Add(new Models.Quest
                    {
                        data = item.DATA,
                        id = item.ID_QUEST.ToString(),
                        like = item.LIKE,
                        opt = item.OPTION,
                        react = item.REACT,
                        idFoto = item.ID_FOTO,
                        idLoja = item.ID_LOJA
                    });
                }

                var path = System.IO.Path.GetDirectoryName(System.IO.Path.GetTempFileName());

                string pathCsv = path + "\\ArquivoReact.csv";


                List<string> output = new List<string>();

                foreach (var item in rClick)
                {
                    output.Add(item.id + ", " + item.data + "," + item.idFoto + "," + item.idLoja + "," + item.like + "," + item.opt + ","+ item.react);
                }

                System.IO.File.WriteAllLines(pathCsv, output.ToArray());

                Process.Start(pathCsv);

            }

            return Json(rClick);
        }

        [HttpPost]
        public JsonResult SalvaClick(Models.Click click)
        {

            using (var db = new LojaDataContext())
            {
                var dataClick = new Lojaonline.DATA.Click
                {
                    DATA = DateTime.Now,
                    ID_LOJA = click.idLoja,
                    ID_FOTO = click.idFoto
                };

                db.Clicks.InsertOnSubmit(dataClick);

                db.SubmitChanges();
            }

            return Json("");
        }

        [HttpPost]
        public JsonResult SalvaQuest(Models.Quest quest)
        {

            using (var db = new LojaDataContext())
            {
                var questData = new Lojaonline.DATA.Quest
                {
                    DATA = DateTime.Now,
                    ID_LOJA = quest.idLoja,
                    REACT = quest.react,
                    ID_FOTO = quest.idFoto,
                    LIKE = quest.like,
                    OPTION = quest.opt
                };

                db.Quests.InsertOnSubmit(questData);

                db.SubmitChanges();
            }

            return Json("");
        }


        [HttpPost]
        public JsonResult VerificaDash(Models.Laura laura)
        {
            Models.Relatorio relatorio = new Models.Relatorio();

            string idLoja = "";
            using (var db = new LojaDataContext())
            {

                try
                {
                     idLoja = db.Tables.Where(d => d.NOME_LOJA == laura.loja).First().ID_LOJA;
                }
                catch (Exception)
                {

                    idLoja = "";
                }
                

                if (idLoja != "")
                {
                    var clicks = db.Clicks.Where(c => c.ID_LOJA == idLoja).ToList();
                    var likes = db.Quests.Where(l => l.ID_LOJA == idLoja && l.LIKE == "2").ToList();
                    var reacts = db.Quests.Where(l => l.ID_LOJA == idLoja && l.REACT == "love").ToList();
                    var options = db.Quests.Where(l => l.ID_LOJA == idLoja && l.OPTION == "1").ToList();
                    relatorio.clicks = clicks.Count();
                    relatorio.like = likes.Count();
                    relatorio.react = reacts.Count();
                    relatorio.option = options.Count();
                }
                else {
                }

            }

            return Json(relatorio);
        }

    }
}