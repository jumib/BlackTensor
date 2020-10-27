<template lang="html">
  <div class="col-md-6 grid-margin card">
    <div class="card-body">
      <h3>My Page</h3><br>
      <v-divider></v-divider><br>
      <form>
        <div class="form-group">
          <label for="exampleInput">키움아이디</label>
          <input type="text" class="form-control" v-model="loginfo.apiId" id="exampleInput" readonly>
        </div>
        <button class="btn btn-success mr-2" @click="$router.push('/mypageEdit/')">변경하기</button><br><br>
        <v-divider></v-divider><br>
        <div class="form-group">
          <label for="exampleInputName1">이름</label>
          <input type="text" class="form-control" v-model="mypageinfo.name" id="exampleInputName1" readonly>
        </div>
        <div class="form-group">
          <b-form-group label="성별">
            <b-form-radio-group name="some-radios" v-model="selected" :options="options" disabled></b-form-radio-group>
          </b-form-group>
        </div><br>
        <div class="form-group">
          <label for="exampleInputName1">생년월일</label>
          <input type="text" class="form-control"  v-model="mypageinfo.birth" id="Day of Birth" readonly>
        </div>
        <div class="form-group">
          <label for="exampleInputName1">연락처</label>
          <input type="text" class="form-control"  v-model="mypageinfo.phone" id="phone number" readonly>
        </div>
        <div class="form-group">
          <label for="exampleTextarea1">메모</label>
          <textarea class="form-control" v-model="mypageinfo.memo" id="exampleTextarea1" rows="2" readonly></textarea>
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
      selected: this.mypageinfo.gender,
      options: [
        { text: 'Male', value: 'M' },
        { text: 'Female', value: 'F' }
      ]
    }
  },
  props: {
    mypageinfo: {
      type: Array
    },
    loginfo: {
      type: Array
    }
  }
}

</script>
