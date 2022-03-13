import React from 'react'

const UserType = ({handleUserSelect}) => {
  return (
    <div className="w-full flex flex-wrap bg-gray-300 justify-center">
          <div class=" p-4 m-2 bg-white hover:bg-blue-300 rounded overflow-hidden shadow-lg" onClick={()=>handleUserSelect("ADMIN")}>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Admin</div>
        </div>
      </div>  
          <div class="p-4 m-2 bg-white hover:bg-blue-300 rounded overflow-hidden shadow-lg" onClick={()=>handleUserSelect("USER")}>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">User</div>
        </div>
      </div>
          <div class=" p-4 m-2 bg-white hover:bg-blue-300 rounded overflow-hidden shadow-lg" onClick={()=>handleUserSelect("MINISTRY")}>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Ministry</div>
        </div>
      </div>
    </div>
  )
}

export default UserType