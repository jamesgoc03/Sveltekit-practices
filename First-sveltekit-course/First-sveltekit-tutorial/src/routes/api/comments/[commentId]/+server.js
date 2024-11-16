import { json } from "@sveltejs/kit"
import { comments } from "$lib/comments.js";

export function GET(requestEvent) {

    const { params } = requestEvent;
    const {commentId} = params;
    const comment = comments.find(
        (comment) => comment.id === parseInt(commentId)
    );
    return json(comment);
}

export async function PATCH(requestEvent) {
    const { params, request } = requestEvent;
    const { commentId } = params;
    const { text } = await request.json();
    const comment = comments.find(
        (comment) => comment.id === parseInt(commentId)
    );
    if (!comment)
        return new Response("Comment not found", { status: 404 });
    comment.text = text;
    return json(comment);
}

export async function DELETE(requestEvent) {
    const { params } = requestEvent;
    const { commentId } = params;
    const deletedComment = comments.find(
        (comment) => comment.id === parseInt(commentId)
    );    
    if (!deletedComment) {
        return new Response("Comment not found", { status: 404 });
    }
    const index = comments.findIndex((comment) => comment.id === parseInt(commentId));
    comments.splice(index, 1);
    return json(deletedComment)
}