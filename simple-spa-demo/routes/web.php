<?php

//Vue-routerを動かすための設定
Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');
