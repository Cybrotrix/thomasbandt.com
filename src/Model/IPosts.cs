using System.Linq;

namespace Blog.Model
{
    public interface IPosts
    {
        Post[] All();
        IOrderedEnumerable<IGrouping<int, Post>> Archive();
        Post SingleOrDefault(string slug);
    }
}
