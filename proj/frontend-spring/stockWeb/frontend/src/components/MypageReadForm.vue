<template lang="html">
  <div class="col-md-6 grid-margin card">
    <div class="card-body">
      <h3>My Page</h3><br>
      <v-divider></v-divider><br>
      <!-- 후에 readonly 해제하고 read 페이지로 대체해야 함 -->
      <form>
        <div class="form-group">
          <label for="exampleInputPassword4">키움아이디</label>
          <input type="password" class="form-control" id="exampleInputPassword4" placeholder="API Id" readonly>
        </div>
        <button class="btn btn-success mr-2" @click="$router.push('/mypageEdit/')">변경하기</button><br><br>
        <v-divider></v-divider><br>
        <div class="form-group">
          <label for="exampleInputName1">이름</label>
          <input type="text" class="form-control" id="exampleInputName1" placeholder="name" readonly>
        </div>
        <div class="form-group">
          <b-form-group label="성별">
            <b-form-radio v-model="selected" name="some-radios" value="Male" disabled>Male</b-form-radio>
            <b-form-radio v-model="selected" name="some-radios" value="Female" disabled>Female</b-form-radio>
          </b-form-group>
        </div><br>
        <div class="form-group">
          <label for="exampleInputName1">생년월일</label>
          <input type="text" class="form-control" id="Day of Birth" placeholder="예) 2000-01-01" readonly>
        </div>
        <div class="form-group">
          <label for="exampleInputName1">연락처</label>
          <input type="text" class="form-control" id="phone number" placeholder="예) 000-0000-0000" readonly>
        </div>
        <div class="form-group">
          <label for="exampleTextarea1">메모</label>
          <textarea class="form-control" id="exampleTextarea1" rows="2" readonly></textarea>
        </div>
        <button class="btn btn-success mr-2" @click="$router.push('/mypageEdit/')">수정하기</button>
      </form>
    </div>
  </div>
</template>

<script>
// 후에 readonly 해제하고 read 페이지로 대체해야 함

export default {
  data () {
    return {
      selected: ''
    }
  }
}

</script>
