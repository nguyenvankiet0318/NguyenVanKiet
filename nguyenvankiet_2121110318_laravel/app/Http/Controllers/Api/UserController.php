<?php

namespace App\Http\Controllers\Api;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /*lay danh sach*/
    public function index(){
        $users = User::all();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'users'=>$users],200);
    }

    /*lay thuong hieu bang id -> chi tiet */
    public function show($id){
        $user = User::find($id);
        if ($user==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'user' => null],404
            );
        }
         
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'user'=>$user],200);
    }
    

    /* them */
    public function store(Request $request){
        $user = new User();
        $user->name = $request->name; //form
        $user->email = $request->email; //form
        $user->phone = $request->phone; //form
        $user->username = $request->username; //form
        $user->password = $request->password; //form
        $user->address = $request->address; //form
         //upload image
         $files = $request->image;
         if ($files != null) {
             $extension = $files->getClientOriginalExtension();
             if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                 $filename = $user->slug . '.' . $extension;
                 $user->image = $filename;
                 $files->move(public_path('images/user'), $filename);
             }
         }
         //
        $user->roles = $request->roles;
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' => $user],201); 
    }

    /*update*/
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name; //form
        $user->email = $request->email; //form
        $user->phone = $request->phone; //form
        $user->username = $request->username; //form
        $user->password = $request->password; //form
        $user->address = $request->address; //form
        // $user->image = $request->name;
        $files= $request->image;
        if ($files!=null){
            $extension = $files->getClientOriginalExtension();
            if(in_array($extension,['jpg', 'png', 'gif', 'webp', 'jpeg']))
            {
                $filename= $user->slug. "." . $extension;
                $user->image= $filename;
                $files->move(public_path('images/user'), $filename);
            }
        }
        $user->roles = $request->roles;
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //form
        $user->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'data' => $user], 200);
    }

    /* xoa */
    public function destroy($id){
        $user = User::find($id);
        $user->delete();
        return response()->json(['success' => true, 'message' => 'Xóa thành công', 'user' => null],200);
}
}
