<template lang="html">

  <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auto-form-wrapper">
                <form action="#">
                  <b-card>
                    <div class="form-group">
                      <label class="label">Username</label>
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Username">
                        <div class="input-group-append">
                          <span class="input-group-text">
                            <i class="mdi mdi-check-circle-outline"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="label">Password</label>
                      <div class="input-group">
                        <input type="password" class="form-control" placeholder="*********">
                        <div class="input-group-append">
                          <span class="input-group-text">
                            <i class="mdi mdi-check-circle-outline"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <b-button
                          class="btn-block" variant="dark" @click="submit">
                        sign in</b-button>
                    </div>
                    <div class="text-block text-center my-3">
                      <a href="#" class="text-small forgot-password text-black">Forgot Password</a>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-block">with Google</button>
                    </div>
                    <div class="text-block text-center my-3">
                      <span class="text-small font-weight-semibold">Not a member ?</span>
                      <a href="register.html" class="text-black text-small">Create new account</a>
                    </div>
                  </b-card>
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
  name: 'login'
}
</script>

<style scoped lang="scss">
.login {
}
</style>