<template>
  <div class="pt-3">
    <form class="customCard bgCard">
      <div class="form-row align-items-end">
        <div class="col-7">
          <label>Search Blog</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Please input Title or Content blog ..."
            v-model="searchInput.search"
          />
        </div>

        <div class="col-2">
          <div>
            <label>Sort By</label>
            <select class="custom-select form-control-sm" v-model="searchInput.sort_by">
              <option v-for="(item, index) in optionSortby" :key="`order-${index}`" :value="item.value">
                {{ item.name }}
              </option>
              <option value="desc">Decrease</option>
            </select>
          </div>
        </div>
        <div class="col-2">
          <div>
            <label>Order</label>
            <select class="custom-select form-control-sm" v-model="searchInput.sort_direction">
              <option value="asc">Ascending</option>
              <option value="desc">Decrease</option>
            </select>
          </div>
        </div>
        <div class="col-1">
          <button class="btn btn-success" type="button" @click.prevent="onSeach()">Search</button>
        </div>
      </div>
    </form>

    <h2 class="text-center my-4 font-effect-fire">MY BLOGS</h2>

    <p class="font-italic text-white text-right">(Page {{ pagination.page }}/{{ pagination.total }} Total)</p>

    <ul class="list-unstyled">
      <li
        v-for="(item, idx) of results"
        :key="`${idx}-item`"
        class="media mb-2 customCard bgCardList"
        @click="toDetailPage(item.id)"
      >
        <img width="64px" height="64px" :src="item.image.url" class="mr-3" alt="..." />
        <div class="media-body">
          <h5 class="mt-0 mb-1">{{ item.title }}</h5>
          {{ item.content }}
        </div>
      </li>
    </ul>

    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="pagination.prev === null ? 'disabled' : ''">
          <a class="page-link" @click="onPrevious()" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          :class="pagination.page === pageNumber ? 'active' : ''"
          @click="onSelectPageNumber(pageNumber)"
          v-for="pageNumber of pagination.total"
          :key="`${pageNumber}-page`"
        >
          <a class="page-link" href="#">{{ pageNumber }}</a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            :class="pagination.next === null ? 'disabled' : ''"
            @click="onNext()"
            href="#"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import { Getter, Action } from 'vuex-class';
import { ACTIONS } from '../store/actions';
import { GETTERS } from '../store/getters';
import { GetList } from '@/apis/blogs-api';

@Component({
  name: 'ListBlogs',
  components: {},
})
export default class Blogs extends Vue {
  // @Action(ACTIONS.FETCH_BLOGS) fetchBlogs: (fieldsSearch) => Promise<any>;
  // @Getter(GETTERS.GET_BLOGS) getBlogs!: any;

  results: any = [];

  searchInput = {
    sort_by: 'created_at',
    sort_direction: 'desc',
    search: '',
  };

  pagination: any = {
    count: 0,
    next: 0,
    offset: 0,
    page: 1,
    prev: null,
    total: 1,
  };

  optionSortby: any = [
    { name: 'Title', value: 'title' },
    { name: 'Content', value: 'content' },
    { name: 'Created at', value: 'created_at' },
    { name: 'Updated at', value: 'updated_at' },
    { name: 'Id', value: 'id' },
  ];

  created() {
    this.fetchPage();
  }

  fetchPage(): void {
    GetList(this.pagination).then((res: any) => {
      this.results = res.data.items;
      this.pagination = res.pagination;
    });
  }

  onPrevious(): void {
    this.pagination.page = this.pagination.prev;
    this.fetchPage();
  }

  onNext(): void {
    this.pagination.page = this.pagination.next;
    this.fetchPage();
  }

  onSelectPageNumber(pageNumber: number): void {
    this.pagination.page = pageNumber;
    this.fetchPage();
  }

  onSeach() {
    this.pagination.page = 1;
    this.pagination = { ...this.pagination, ...this.searchInput };
    this.fetchPage();
  }

  toDetailPage(id: string) {
    this.$router.push({ name: 'BlockDetail', params: { id: id } });
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sofia&effect=fire');

h2 {
  font-family: 'Sofia', sans-serif;
}

.customCard {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1.25rem;
}

label {
  font-weight: 500;
  color: #fff;
}

.bgCard {
  background: transparent;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
}

.media-body {
  color: white;
}

.bgCardList {
  background: transparent;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.page-link {
  background-color: transparent !important;
  color: #fff;
  border: none;
}
</style>
