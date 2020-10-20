<template lang="html">
  <div class="col-md-6 grid-margin stretch-card">
      <div class="card-body">
        <h4>My Page</h4><br>
        <form>
          <div class="form-group">
            <label for="exampleInputName1">이름</label>
            <input type="text" class="form-control" id="exampleInputName1" placeholder="name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword4">키움아이디</label>
            <input type="password" class="form-control" id="exampleInputPassword4" placeholder="API Id">
            <b-button>변경하기</b-button><br>
          </div>
          <div class="form-group">
              <b-form-group label="성별">
                <b-form-radio v-model="selected" name="some-radios" value="Male">Male</b-form-radio>
                <b-form-radio v-model="selected" name="some-radios" value="Female">Female</b-form-radio>
              </b-form-group>
          </div><br>
          <div class="form-group">
            <label for="exampleInputName1">생년월일</label>
            <input type="text" class="form-control" id="Day of Birth" placeholder="예) 2000-01-01">
          </div>

          <div class="form-group">
            <label for="exampleInputName1">연락처</label>
            <input type="text" class="form-control" id="phone number" placeholder="예) 000-0000-0000">
          </div>
          <div class="form-group">
            <label for="exampleTextarea1">메모</label>
            <textarea class="form-control" id="exampleTextarea1" rows="2"></textarea>
          </div>
          <button type="submit" class="btn btn-success mr-2">Submit</button>
          <button class="btn btn-light">Cancel</button>
        </form>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      selected: ''
    }
  }
}

</script>
