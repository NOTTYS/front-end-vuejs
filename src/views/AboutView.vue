<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  checkToken() {
      alert("You are not login!.")
          axios.get('http://localhost:3750/api/user/get')
        .then(res=> {
          alert("hi")
        }).catch(error => {
              // window.sessionStorage.removeItem("token")
                alert("You are not login!.")
        })
        }
}
</script>
