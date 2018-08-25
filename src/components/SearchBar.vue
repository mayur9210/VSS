<template>
<div class="section">
    <div class="container s-fullhd">
        <form @submit.prevent="search">
          <div class="field is-grouped">
            <div class="control is-expanded">
              <input type="text" v-model="inputValue"  class="input is-medium is-flat" placeholder="Enter a Website URL" required="">
            </div>
            <div class="control">
                <div class="select is-medium">
                  <select  v-model="country">
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="in">India</option>
                    <option value="jp">Japan</option>
                  </select>
              </div>
            </div>
            <div class="control">
                <div class="select is-medium">
                  <select  v-model="language">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="de">German</option>
                  </select>
              </div>
            </div>
            <div class="control">
              <button class="button is-medium is-link">
                <strong>Submit</strong>
              </button>
            </div>
          </div>
        </form>

<div class="tile is-ancestor">
  <div class="tile is-4 is-vertical is-parent">
    <div class="tile is-child box">
      <p class="title">One</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
    </div>
    <div class="tile is-child box">
      <p class="title">Two</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-child box">
         <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Keywords</th>
            </tr>
          </thead>
           <tbody>
             <tr v-for="(item,index) in response" :key="index">
              <th>{{item}}</th>
            </tr>
           </tbody>
         </table>
         </div>
  </div>
</div>

    

         <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <ul class="pagination-list">
              <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
              <li><span class="pagination-ellipsis">&hellip;</span></li>
              <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
              <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
              <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
              <li><span class="pagination-ellipsis">&hellip;</span></li>
              <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
            </ul>
        </nav>
    </div>
</div>
</template>

<script>
import axios from "axios";
import _ from "lodash";
import base from "../axios/Base";

export default {
  name: "SearchBar",
  data() {
    return {
      inputValue: "",
      error: null,
      key: "AIzaSyA3pQa2lYR8rSWK98lBFUWUhXVev739jOY",
      response: "",
      country: "us",
      language: "en",
      result: null,
      totalCount: null,
      currentPage: null,
      totalPages: 0,
      total: 0,
      term: [
        "",
        "a",
        "b",
        "c",
        "d"
        // "",
        // "a",
        // "b",
        // "c",
        // "d",
        // "",
        // "a",
        // "b",
        // "c",
        // "d",
        // "",
        // "a",
        // "b",
        // "c",
        // "d",
        // "",
        // "a",
        // "b",
        // "c",
        // "d",
        // "",
        // "a",
        // "b",
        // "c",
        // "d"
      ]
    };
  },
  methods: {
    search() {
      console.log("search");
      let promises = [];

      for (let i = 0; i < this.term.length; i++) {
        promises.push(
          base.get(
            `hl=${this.language}&gl=${this.country}&q=${this.inputValue}+${
              this.term[i]
            }`
          )
        );
      }

      console.log(promises);

      let myObject = [];
      axios
        .all(promises)
        .then(
          axios.spread((...args) => {
            for (let i = 0; i < args.length; i++) {
              myObject.push(args[i].data[1]);
            }
          })
        )
        .then(response => {
          this.response = [].concat.apply([], myObject);
          console.log(this.response);

          this.result = this.response;
          this.totalCount = this.response.length;
          this.total = this.response.length;
          this.currentPage = 1;
          this.totalPages = Math.ceil(this.totalCount / 100);
        });
    }
  }
};
</script>
