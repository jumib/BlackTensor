<template lang="html">
  <div class="col-md-6 grid-margin card">
    <div class="card-body">
      <h3>My Page</h3><br>
      <v-divider></v-divider><br>
      <form>
        <div class="form-group">
          <label for="exampleInputPassword4">키움아이디</label>
          <input type="password" class="form-control" id="exampleInputPassword4" placeholder="API Id" readonly>
        </div>
        <button class="btn btn-success mr-2" @click="$router.push('/mypageEdit/')">변경하기</button><br><br>
        <v-divider></v-divider><br>
        <div class="form-group">
          <label for="exampleInputName1">이름</label>
          <input type="text" class="form-control" v-model="memberinfo.name" id="exampleInputName1" readonly>
        </div>
        <div class="form-group">
          <b-form-group label="성별">
            <b-form-radio  v-model="selected" name="some-radios" value="M"  disabled>Male</b-form-radio>
            <b-form-radio v-model="selected" name="some-radios" value="F" disabled>Female</b-form-radio>
          </b-form-group>
        </div><br>
        <div class="form-group">
          <label for="exampleInputName1">생년월일</label>
          <input type="text" class="form-control"  v-model="memberinfo.birth" id="Day of Birth" readonly>
        </div>
        <div class="form-group">
          <label for="exampleInputName1">연락처</label>
          <input type="text" class="form-control"  v-model="memberinfo.phone" id="phone number" readonly>
        </div>
        <div class="form-group">
          <label for="exampleTextarea1">메모</label>
          <textarea class="form-control" v-model="memberinfo.memo" id="exampleTextarea1" rows="2" readonly></textarea>
        </div>
        <button class="btn btn-success mr-2" @click="$router.push('/mypageEdit/')">수정하기</button>
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
  },
  props: {
    memberinfo: {
      type: Array
    }
  }
}

</script>
