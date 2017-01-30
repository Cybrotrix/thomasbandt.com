using System.Linq;

namespace Blog.Model
{
    public interface IPosts
    {
        Post[] Published();
        IOrderedEnumerable<IGrouping<int, Post>> Archive();
        Post SingleOrDefault(string slug);
        PostCollection Paged(int page);
    }
}
