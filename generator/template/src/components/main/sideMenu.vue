<template>
  <div class="root">
    <Menu ref="menuEl" theme="dark" :accordion="true" :active-name="activeName" :open-names="openNames"
          @on-select="changeMenu">
      <template v-for="(item, index) in navData" v-if="!item.hide">
        <template v-if="item.type === navType.MENU_ITEM ">
          <MenuItem :name="item.id" :key="index">
            <Icon :type="item.icon" :key="index"></Icon>
            {{item.title}}
          </MenuItem>

        </template>
        <template v-else>
          <Submenu :name="item.id" :key="index">
            <template slot="title">
              <Icon :type="item.icon"></Icon>
              {{item.title}}
            </template>
            <template v-for="childItem in item.children" v-if="!childItem.hide">
              <MenuItem :name="childItem.id" :key="childItem.id">
                <Icon :type="childItem.icon" :key="childItem.id"></Icon>
                <template v-if="childItem.id === 'myAlertWaiting' && countAll.count">
                  <Badge dot :key="childItem.id">
                    {{childItem.title}}
                  </Badge>
                </template>
                <template v-else>
                  {{childItem.title}}
                </template>
              </MenuItem>

            </template>

          </Submenu>
        </template>
      </template>
    </Menu>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState, mapMutations } from 'vuex';
  import navType from '../../common/navType';

  export default {
    created () {
      this.checkRouter();
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      changeMenu (val) {
        this.activeName = val;
        this.$router.push({ name: val });
      },
      checkRouter () {
        this.routerName = this.$route.name;
        let r = this.routerMap[this.routerName];
        if (r) {
          if (r.sub) {
            this.activeName = r.sub;
            this.openNames = [r.main];
          } else {
            this.activeName = r.main;
          }
        }
        this.$nextTick(() => {
          this.$refs.menuEl.updateActiveName();
          this.$refs.menuEl.updateOpened();
        });
      },
      ...mapMutations(['setAdminSee'])
    },
    watch: {
      $route () {
        this.checkRouter();
      }
    },
    props: {
      navData: {
        default () {
          return [];
        },
        type: Array
      },
      routerMap: {
        default () {
          return {};
        },
        type: Object
      }
    },
    data () {
      return {
        navType,
        activeName: '',
        openNames: []
      };
    }
  };

</script>

<style scoped lang=scss>
  .root {
    width: 240px;
    background-color: #33414a;
    box-shadow: 1px 2px 3px 0 #1b1a1a;
  }

</style>
