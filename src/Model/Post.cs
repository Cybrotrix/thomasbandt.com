using System;
using System.Collections.Generic;
using System.IO;
using CommonMark;

namespace Blog.Model
{
    public class Post
    {
        private static readonly Dictionary<int, string> _htmlCache = new Dictionary<int, string>();

        public int Id { get; set; }
        public string Title { get; set; }
        public string Abstract { get; set; }
        public string Slug { get; set; }
        public DateTime PublishingDate { get; set; }
        public bool IsPublished { get; set; }
        public PostCategory Category { get; set; }

        public Post()
        {
            IsPublished = true;
        }

        public string GetHtmlContent()
        {
            string html;

            if (_htmlCache.TryGetValue(Id, out html) && !string.IsNullOrWhiteSpace(html))
            {
                return html;
            }

            string filePath = $"./Posts/{Id.ToString().PadLeft(4, '0')}.md";
            string markdown = File.ReadAllText(filePath);

            html = CommonMarkConverter.Convert(markdown);

            _htmlCache[Id] = html;

            return html;
        }
    }
}
