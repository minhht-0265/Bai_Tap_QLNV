<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\User;
use App\Http\Controllers\API\UserController;

class UserController extends Controller
{
    public function index()
        {
            $users = User::all();
            return response()->json([
                'status'=> 200,
                'users'=>$users,
            ]);
        }
    public function store(Request $request)
    {
      {
      $user = new User;
      $user->name = $request->input('name');
      $user->address = $request->input('address');
      $user->email = $request->input('email');
      $user->phone_number = $request->input('phone_number');
      $user->role = $request->input('role');
      $user->password = $request->input('password');
      
      $user->save();
       return response()->json([
             'status'=> 200,
             'message'=>'User Added Successfully',   
      ]);
       }   
    }
}
