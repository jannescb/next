<?php
namespace App\Ui\Forms;

use App\Models\Post;
use Ignite\Form\Fields\Input;
use Ignite\Form\Form;
use Ignite\Form\Schema;

class PostForm extends Form
{
    /**
     * The form model.
     *
     * @var Post
     */
    protected $model = Post::class;
    /**
     * Build the form schema.
     *
     * @param  Schema $form
     * @param  Post   $post
     * @return void
     */
    public function schema(Schema $form)
    {
        $form->fields([
            (new Input('title'))->title('Foo'),
        ]);
    }
}
