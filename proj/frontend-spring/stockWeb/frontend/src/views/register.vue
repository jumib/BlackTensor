<template lang="html">

  <section class="register">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper auth p-0 theme-two">
          <div class="row d-flex align-items-stretch">
            <div class="col-md-4 banner-section d-none d-md-flex align-items-stretch justify-content-center">
              <div class="slide-content bg-2"> </div>
            </div>
            <div class="col-12 col-md-8 h-100 bg-white">
              <div class="auto-form-wrapper d-flex align-items-center justify-content-center flex-column">
                <form>
                  <h3>Ready to get free access <br>to the world of investing?</h3><br><br>
                  <div>
                    <label class="label">Username</label>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Username">
                    </div><br>
                  </div>
                  <div>
                    <label class="label">Password</label>
                    <div class="input-group">
                      <input type="password" class="form-control" placeholder="*********">
                    </div><br>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-dark submit-btn btn-block" @click="$router.push('/totalpage/')">Login</button>
                  </div>
                  <div class="form-group d-flex justify-content-between">
                    <a href="#" class="text-small forgot-password text-black">Forgot Password</a>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-block g-login">
                      <img class="mr-3">Log in with Google</button>
                  </div>
                  <div class="text-block text-center my-3">
                    <span class="text-small font-weight-semibold">Not a member ?</span>
                    <a href="register.html" class="text-black text-small">Create new account</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'register'
}
</script>

<style scoped lang="scss">
.register {

}
</style>
