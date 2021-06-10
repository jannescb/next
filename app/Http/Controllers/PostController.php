<?php
namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Tables\PostTable;
use App\Ui\Forms\PostForm;
use App\Ui\Page;
use Illuminate\Http\Request;

class PostController
{
    public function index(Request $request, Page $page)
    {
        //
        return $page;
    }
    public function items(Request $request, PostTable $table)
    {
        return $table->items($request, Post::query(), PostResource::class);
    }
    public function show(Page $page, Post $post)
    {
        $page->form(
            new PostForm($post),
            route('posts.update', $post)
        );
        $page->table(
            (new PostTable)->syncUrl(),
            route('posts.items')
        );
        return $page->with('post', $post);
    }
    public function update(Request $request, Post $post)
    {
        return (new PostForm($post))->update($request);
    }
}
