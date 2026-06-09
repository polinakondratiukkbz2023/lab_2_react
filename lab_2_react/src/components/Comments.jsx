import { useEffect, useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/10/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <section className="bg-white rounded-3xl shadow-lg p-8 mt-8">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">
        Коментарі роботодавців
      </h2>

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="border border-gray-300 rounded-2xl p-4 mb-4 hover:shadow-lg transition"
        >
          <h3 className="font-bold text-lg mb-2">
            {comment.name}
          </h3>

          <p className="text-gray-600 mb-2">
            {comment.email}
          </p>

          <p className="text-gray-800">
            {comment.body}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Comments;