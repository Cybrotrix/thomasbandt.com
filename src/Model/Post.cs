using System;

namespace Blog.Model
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Abstract { get; set; }
        public string HtmlContent { get; set; }
        public string Slug { get; set; }
        public DateTime PublishingDate { get; set; }
        public bool IsPublished { get; set; }
        public PostCategory Category { get; set; }

        public Post()
        {
            IsPublished = true;
        }
    }
}
