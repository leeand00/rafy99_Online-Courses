function delete_swal(url){

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      window.location = url;
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })

}

function error(content){

Swal.fire({
  icon: 'error',
  text: content,
})

}
function success(content){
  Swal.fire({
    icon: 'success',
    text: content,
  })

}
