using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace ajax_notes_web.controllers
{
    public class ajax_notes_web : Controller
    {
        private readonly DbConnector _dbConnector;
 
        public ajax_notes_web(DbConnector connect)
        {
            _dbConnector = connect;
        }
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            List<Dictionary<string, object>> all_notes = _dbConnector.Query("SELECT * FROM notes");
            ViewBag.notes = all_notes;
            return View("index");
        }

        [HttpPost]
        [Route("addnote")]
        public IActionResult AddNote(string title, string description)
        {
            string query = $"INSERT INTO notes (title, description) VALUES ('{title}', '{description}')";
            _dbConnector.Execute(query);
            return RedirectToAction("Index");
        }
    }
}