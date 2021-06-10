<?php
namespace App\Tables;

use Ignite\Ui\Table\Schema;
use Ignite\Ui\Table\Table;

class PostTable extends Table
{
    /**
     * Undocumented function.
     *
     *
     * @param  Schema $table
     * @throws Foo
     * @return void
     */
    public function schema(Schema $table)
    {
        $table->col()->label('Title')->value('title');
        $table->col()->label('Text')->value('text');
    }
}
