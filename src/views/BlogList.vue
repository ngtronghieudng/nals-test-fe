<template>
  <div class="pt-3 container blogCustom">
    <form class="customCard bgCard">
      <div class="form-row align-items-end pb-3">
        <div class="col-xl-7 col-12">
          <BaseInput
            label="Search Blog"
            name="Search"
            @vm="search"
            placeholder="Please input Title or Content blog ..."
          />
        </div>

        <div class="col-xl-2 col-6 pt-3">
          <BaseSelect label="Sort By" :selectOption="optionSortby" defaultValue="created_at" @vm="sortBy" />
        </div>
        <div class="col-xl-2 col-6 pt-3">
          <BaseSelect label="Order" :selectOption="optionOrder" defaultValue="desc" @vm="order" />
        </div>
        <div class="col-xl-1 col-12 pt-4">
          <BaseButton :colorType="'info'" :text="'Search'" @on-click="onSeach" />
        </div>
      </div>
    </form>

    <h2 class="text-center mb-4 mt-5 font-effect-fire">MY BLOG LIST</h2>

    <p class="font-italic text-white text-right">(Page {{ pagination.page }}/{{ pagination.total }} Total)</p>

    <p v-if="results.length === 0 && !isLoading" class="text-center font-italic text-white">No Result</p>

    <BaseSpinner :is-loading="isLoading" />

    <div v-if="!isLoading">
      <ul class="list-unstyled listCustom">
        <li
          v-for="(item, idx) of results"
          :key="`${idx}-item`"
          class="media mb-2 customCard bgCardList d-flex justify-content-between align-items-center"
          @click="toDetailPage(item.id)"
        >
          <div class="d-flex">
            <img width="64px" height="64px" :src="item.image.url" class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0 mb-1">{{ item.title }}</h5>
              {{ item.content }}
            </div>
          </div>
          <div @click.stop>
            <button class="btn btn-light" @click="toEditPage(item.id)"><i class="fal fa-pen"></i></button>
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

    <BaseToast :text="textNoti" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ACTIONS } from '../store/actions';
import { GETTERS } from '../store/getters';
import { GetList } from '@/apis/blogs-api';
import BaseSpinner from '@/components/common/BaseSpinner.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { BlogsDto, ItemsDto, PaginationDto } from '@/models/blogsDto';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseSelect from '@/components/common/BaseSelect.vue';
import BaseToast from '@/components/common/BaseToast.vue';

@Component({
  components: {
    BaseSpinner,
    BaseButton,
    BaseInput,
    BaseSelect,
    BaseToast,
  },
})
export default class BlogList extends Vue {
  // @Action(ACTIONS.FETCH_BLOGS) fetchBlogs: (fieldsSearch) => Promise<any>;
  // @Getter(GETTERS.GET_BLOGS) getBlogs!: any;

  results: ItemsDto[] = [];
  isLoading = false;
  textNoti = '';

  searchInput = {
    sort_by: 'created_at',
    sort_direction: 'desc',
    search: '',
  };

  pagination: PaginationDto = {
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

  optionOrder: any = [
    { name: 'Ascending', value: 'asc' },
    { name: 'Decrease', value: 'desc' },
  ];

  created() {
    this.fetchPage();
  }

  fetchPage(): void {
    this.isLoading = true;
    GetList(this.pagination).then((res: any) => {
      this.results = res.data.items;
      this.pagination = res.pagination;
      this.isLoading = false;
      this.$bvToast.show('my-toast');
      this.textNoti = 'Get blog successfully';
    });
  }

  onPrevious(): void {
    this.pagination.page = this.pagination.prev ?? 0;
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

  search(val: string) {
    this.searchInput.search = val;
  }

  sortBy(val: string) {
    this.searchInput.sort_by = val;
  }

  order(val: string) {
    this.searchInput.sort_direction = val;
  }

  toEditPage(id: string) {
    this.$router.push({ name: 'EditBlog', params: { id: id } });
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
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.page-link {
  background-color: transparent !important;
  color: #fff;
  border: none;
}

.blogCustom {
  min-height: 100vh;
}

.listCustom {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
</style>
