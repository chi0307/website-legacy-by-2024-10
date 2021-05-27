<template>
  <div class="all-view">
    <div class="select-view">
      <div class="message-list">
        <draggable
          class="list-group"
          :value="types"
          :group="{ name: 'messages', pull: 'clone', put: false }"
          :clone="cloneMessage"
        >
          <div
            v-for="({ title, type }, index) of types"
            :key="index"
            class="item"
            @click="clickToAddMessage(type)"
          >
            {{ title }}
          </div>
        </draggable>
      </div>
      <div class="action-list">
        <draggable
          class="list-group"
          :value="actions"
          :group="{ name: 'actions', pull: 'clone', put: false }"
          :clone="cloneAction"
        >
          <div v-for="({ title }, index) of actions" :key="index" class="item">
            {{ title }}
          </div>
        </draggable>
      </div>
    </div>
    <div class="compose-view">
      <div class="compose-inblock">
        <draggable class="list-group" :list="messages" group="messages" handle=".handle">
          <div v-for="(message, index) of messages" :key="index" class="item">
            <div class="title-block">
              <div class="title" @click="message.collapseOpen = !message.collapseOpen">
                <FontAwesomeIcon class="icon handle bar-icon" :icon="['fa', 'align-justify']" />
                {{ typeName[message.type] }}
              </div>
              <div class="delete" @click="messages.splice(index, 1)">
                <FontAwesomeIcon class="icon" :icon="['fas', 'times']" />
              </div>
            </div>
            <CollapseTransition>
              <div v-show="message.collapseOpen" class="content-block">
                <div v-if="message.type === 'text'">
                  <div class="input-block">
                    <p class="input-description">
                      訊息
                    </p>
                    <input v-model="message.text" type="text" class="input-content" />
                  </div>
                </div>
                <div v-else-if="message.type === 'image'">
                  <div class="input-block">
                    <p class="input-description">
                      圖片 URL
                    </p>
                    <input
                      v-model="message.imageUrl"
                      type="text"
                      class="input-content"
                      placeholder="https://"
                    />
                  </div>
                  <div class="input-block">
                    <p class="input-description">
                      預覽圖片 URL
                    </p>
                    <input
                      v-model="message.previewImageUrl"
                      type="text"
                      class="input-content"
                      placeholder="https://"
                    />
                  </div>
                </div>
                <div v-else-if="message.type === 'video'">
                  <div class="input-block">
                    <p class="input-description">
                      影片 URL
                    </p>
                    <input
                      v-model="message.videoUrl"
                      type="text"
                      class="input-content"
                      placeholder="https://"
                    />
                  </div>
                  <div class="input-block">
                    <p class="input-description">
                      預覽圖片 URL
                    </p>
                    <input
                      v-model="message.previewImageUrl"
                      type="text"
                      class="input-content"
                      placeholder="https://"
                    />
                  </div>
                </div>
                <div v-else-if="message.type === 'audio'">
                  <div class="input-block">
                    <p class="input-description">
                      音檔 URL
                    </p>
                    <input
                      v-model="message.audioUrl"
                      type="text"
                      class="input-content"
                      placeholder="https://"
                    />
                  </div>
                  <div class="input-block">
                    <p class="input-description">
                      音檔長度 (ms)
                    </p>
                    <input v-model.number="message.duration" type="text" class="input-content" />
                  </div>
                </div>
                <div v-else-if="message.type === 'button'">
                  <div class="input-block">
                    <p class="input-description">
                      替代文字
                    </p>
                    <input
                      v-model="message.altText"
                      type="text"
                      class="input-content"
                      placeholder="line 訊息替代文字"
                    />
                  </div>
                  <div class="input-block">
                    <p class="input-description">
                      標題
                    </p>
                    <input v-model="message.title" type="text" class="input-content" />
                  </div>
                  <div class="input-block">
                    <p class="input-description">
                      內文
                    </p>
                    <input v-model="message.text" type="text" class="input-content" />
                  </div>
                  <draggable
                    class="list-group"
                    :list="message.buttons"
                    group="actions"
                    handle=".input-description"
                  >
                    <div v-for="(button, index2) of message.buttons" :key="index2">
                      <div v-if="button.type === 'postback'" class="input-block">
                        <p class="input-description input-description-action">
                          PostBack
                        </p>
                        <input
                          v-model="button.title"
                          type="text"
                          class="input-content-action"
                          placeholder="顯示文字"
                        />
                        <input
                          v-model="button.data"
                          type="text"
                          class="input-content-action"
                          placeholder="回覆資料"
                        />
                        <div
                          class="input-content-action-delete"
                          @click="message.buttons.splice(index2, 1)"
                        >
                          <FontAwesomeIcon class="icon" :icon="['fas', 'times']" />
                        </div>
                      </div>
                      <div v-else-if="button.type === 'url'" class="input-block">
                        <p class="input-description input-description-action">
                          Url
                        </p>
                        <input
                          v-model="button.title"
                          type="text"
                          class="input-content-action"
                          placeholder="顯示文字"
                        />
                        <input
                          v-model="button.url"
                          type="text"
                          class="input-content-action"
                          placeholder="https://"
                        />
                        <div
                          class="input-content-action-delete"
                          @click="message.buttons.splice(index2, 1)"
                        >
                          <FontAwesomeIcon class="icon" :icon="['fas', 'times']" />
                        </div>
                      </div>
                      <div v-else-if="button.type === 'phone'" class="input-block">
                        <p class="input-description input-description-action">
                          Phone
                        </p>
                        <input
                          v-model="button.title"
                          type="text"
                          class="input-content-action"
                          placeholder="顯示文字"
                        />
                        <input
                          v-model="button.number"
                          type="text"
                          class="input-content-action"
                          placeholder="+886-0912-345-678"
                        />
                        <div
                          class="input-content-action-delete"
                          @click="message.buttons.splice(index2, 1)"
                        >
                          <FontAwesomeIcon class="icon" :icon="['fas', 'times']" />
                        </div>
                      </div>
                    </div>
                  </draggable>
                </div>
                <div v-else-if="message.type === 'carousel'">
                  <div class="input-block">
                    <p class="input-description">
                      替代文字
                    </p>
                    <input
                      v-model="message.altText"
                      type="text"
                      class="input-content"
                      placeholder="line 訊息替代文字"
                    />
                  </div>
                  <draggable
                    v-model="message.columns"
                    class="list-group"
                    group="carousels"
                    handle=".carousel-handle"
                  >
                    <div
                      v-for="(column, index2) of message.columns"
                      :key="index2"
                      class="carousel-column"
                    >
                      <div class="input-block">
                        <p
                          class="input-description input-description-title"
                          @click="column.collapseOpen = !column.collapseOpen"
                        >
                          <FontAwesomeIcon
                            class="icon carousel-handle bar-icon"
                            :icon="['fa', 'align-justify']"
                          />
                          輪播模板 {{ index2 + 1 }}
                        </p>
                        <div
                          class="input-content-action-delete"
                          @click="message.columns.splice(index2, 1)"
                        >
                          <FontAwesomeIcon class="icon" :icon="['fas', 'times']" />
                        </div>
                      </div>
                      <CollapseTransition>
                        <div v-show="column.collapseOpen">
                          <div class="input-block">
                            <p class="input-description">
                              標題
                            </p>
                            <input v-model="column.title" type="text" class="input-content" />
                          </div>
                          <div class="input-block">
                            <p class="input-description">
                              內文
                            </p>
                            <input v-model="column.text" type="text" class="input-content" />
                          </div>
                          <div class="input-block">
                            <p class="input-description">
                              圖片 Url
                            </p>
                            <input
                              v-model="column.imageUrl"
                              type="text"
                              class="input-content"
                              placeholder="https://"
                            />
                          </div>
                          <draggable
                            class="list-group"
                            :list="column.buttons"
                            group="actions"
                            handle=".input-description"
                          >
                            <div v-for="(button, index3) of column.buttons" :key="index3">
                              <div v-if="button.type === 'postback'" class="input-block">
                                <p class="input-description input-description-action">
                                  PostBack
                                </p>
                                <input
                                  v-model="button.title"
                                  type="text"
                                  class="input-content-action"
                                  placeholder="顯示文字"
                                />
                                <input
                                  v-model="button.data"
                                  type="text"
                                  class="input-content-action"
                                  placeholder="回覆資料"
                                />
                                <div
                                  class="input-content-action-delete"
                                  @click="column.buttons.splice(index3, 1)"
                                >
                                  <FontAwesomeIcon class="icon" :icon="['fas', 'times']" />
                                </div>
                              </div>
                              <div v-else-if="button.type === 'url'" class="input-block">
                                <p class="input-description input-description-action">
                                  Url
                                </p>
                                <input
                                  v-model="button.title"
                                  type="text"
                                  class="input-content-action"
                                  placeholder="顯示文字"
                                />
                                <input
                                  v-model="button.url"
                                  type="text"
                                  class="input-content-action"
                                  placeholder="https://"
                                />
                                <div
                                  class="input-content-action-delete"
                                  @click="column.buttons.splice(index3, 1)"
                                >
                                  <FontAwesomeIcon class="icon" :icon="['fas', 'times']" />
                                </div>
                              </div>
                              <div v-else-if="button.type === 'phone'" class="input-block">
                                <p class="input-description input-description-action">
                                  Phone
                                </p>
                                <input
                                  v-model="button.title"
                                  type="text"
                                  class="input-content-action"
                                  placeholder="顯示文字"
                                />
                                <input
                                  v-model="button.number"
                                  type="text"
                                  class="input-content-action"
                                  placeholder="+886-0912-345-678"
                                />
                                <div
                                  class="input-content-action-delete"
                                  @click="column.buttons.splice(index3, 1)"
                                >
                                  <FontAwesomeIcon class="icon" :icon="['fas', 'times']" />
                                </div>
                              </div>
                            </div>
                          </draggable>
                        </div>
                      </CollapseTransition>
                    </div>
                  </draggable>
                  <div v-if="message.columns.length < 10" class="input-block">
                    <p class="input-description add-template-button" @click="addCarousel(index)">
                      新增模板
                    </p>
                  </div>
                </div>
              </div>
            </CollapseTransition>
          </div>
        </draggable>
      </div>
    </div>
    <div class="show-view">
      <div class="setting-block">
        <div class="button-block">
          <div class="npm-transform-chatbot-message-kit-button" @click="openNPMKit()">
            搭配套件
          </div>
        </div>
        <div class="button-block">
          <toggle-button
            v-model="cacheMessages"
            color="#42b983"
            :height="40"
            :width="100"
            :labels="{ checked: '保存', unchecked: '不保存' }"
            :fontSize="14"
          />
        </div>
      </div>
      <select v-model="showPage" class="change-view">
        <option v-for="({ key, value }, index) of showViewList" :key="index" :value="key">
          {{ value }}
        </option>
      </select>
      <JsonViewer
        v-if="['json', 'line-json', 'facebook-json'].includes(showPage)"
        class="json-view"
        :value="renderJSON"
        :expandDepth="Infinity"
        :previewMode="true"
        copyable
      />
      <div v-else-if="showPage === 'text'" class="text-view">
        <textarea
          class="textarea-input-box"
          :value="JSON.stringify(renderJSON, null, 4)"
          @change="checkJsonAndReturnJson"
        />
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import JsonViewer from 'vue-json-viewer';
import {
  transformToLineMessages,
  transformToFacebookMessages,
} from '@chi0307/transform-chatbot-message';

export default {
  components: {
    draggable,
    JsonViewer,
  },
  data() {
    return {
      types: [
        { title: '文字訊息 Text', type: 'text' },
        { title: '圖片訊息 Image', type: 'image' },
        { title: '影片訊息 Video', type: 'video' },
        { title: '聲音訊息 Audio', type: 'audio' },
        { title: '按鈕訊息 Button', type: 'button' },
        { title: '輪播訊息 Carousel', type: 'carousel' },
      ],
      actions: [
        { title: 'Postback', type: 'postback' },
        { title: 'Url', type: 'url' },
        { title: 'Phone', type: 'phone' },
      ],
      messages: [],
      showPage: 'json',
      showViewList: [
        {
          key: 'json',
          value: '共用 Messages',
        },
        {
          key: 'line-json',
          value: 'Line Messages',
        },
        {
          key: 'facebook-json',
          value: 'Facebook Messages',
        },
        {
          key: 'text',
          value: '匯入 Messages',
        },
      ],
      cacheMessages: false,
    };
  },
  computed: {
    typeName() {
      const typeObj = {};
      this.types.forEach(({ type, title }) => {
        typeObj[type] = title;
      });
      return typeObj;
    },
    transformToLine() {
      return transformToLineMessages(this.messages);
    },
    transformToFacebook() {
      return transformToFacebookMessages(this.messages);
    },
    renderJSON() {
      let json;
      if (this.showPage === 'line-json') {
        json = this.transformToLine;
      } else if (this.showPage === 'facebook-json') {
        json = this.transformToFacebook;
      } else if (this.showPage === 'json' || this.showPage === 'text') {
        const newMessages = JSON.parse(JSON.stringify(this.messages));
        json = this.clearMessagesKey(newMessages);
      }
      return json;
    },
  },
  watch: {
    showPage(value) {
      this.storage({ showPage: value });
    },
    messages: {
      handler(value) {
        if (this.cacheMessages) {
          this.storage({ messages: value });
        } else {
          this.storage({ messages: [] });
        }
      },
      deep: true,
    },
    cacheMessages(value) {
      this.storage({ cacheMessages: value });
      if (value) {
        this.storage({ messages: this.messages });
      } else {
        this.storage({ messages: [] });
      }
    },
  },
  created() {
    if (localStorage.key('chatbotConfig')) {
      const chatbotConfig = this.storage();
      Object.assign(this, chatbotConfig);
    }
  },
  methods: {
    addMessage(type) {
      switch (type) {
        case 'text': {
          return {
            collapseOpen: true,
            type: 'text',
            text: '',
          };
        }
        case 'image': {
          return {
            collapseOpen: true,
            type: 'image',
            imageUrl: '',
            previewImageUrl: '',
          };
        }
        case 'video': {
          return {
            collapseOpen: true,
            type: 'video',
            videoUrl: '',
            previewImageUrl: '',
          };
        }
        case 'audio': {
          return {
            collapseOpen: true,
            type: 'audio',
            audioUrl: '',
            duration: 0,
          };
        }
        case 'button': {
          return {
            collapseOpen: true,
            type: 'button',
            altText: '',
            title: '',
            text: '',
            buttons: [this.addAction('postback')],
          };
        }
        case 'carousel': {
          return {
            collapseOpen: true,
            type: 'carousel',
            altText: '',
            columns: [
              {
                collapseOpen: true,
                title: '',
                text: '',
                imageUrl: '',
                buttons: [this.addAction('postback')],
              },
            ],
          };
        }
        default:
          return {};
      }
    },
    addAction(type) {
      switch (type) {
        case 'postback': {
          return {
            type: 'postback',
            title: '',
            data: '',
          };
        }
        case 'url': {
          return {
            type: 'url',
            title: '',
            url: '',
          };
        }
        case 'phone': {
          return {
            type: 'phone',
            title: '',
            number: '',
          };
        }
        default:
          return {};
      }
    },
    addCarousel(messageIndex) {
      if (this.messages[messageIndex].columns.length < 10) {
        this.messages[messageIndex].columns.push({
          collapseOpen: true,
          title: '',
          text: '',
          imageUrl: '',
          buttons: [this.addAction('postback')],
        });
      }
    },
    cloneMessage({ type }) {
      return this.addMessage(type);
    },
    clickToAddMessage(type) {
      const message = this.addMessage(type);
      this.messages.push(message);
    },
    cloneAction({ type }) {
      return this.addAction(type);
    },
    // 輸入的 json 檢查是不是符合 json 格式，同時轉換成 json 型別
    checkJsonAndReturnJson(event) {
      const jsonText = event.target.value || event.srcElement.value || '[]';
      try {
        this.messages = this.makeUpMessageKey(JSON.parse(jsonText));
        document.querySelector('.textarea-input-box').classList.remove('warning-border');
      } catch (e) {
        document.querySelector('.textarea-input-box').classList.add('warning-border');
      }
    },
    // 把資料儲存到 localStorage
    storage(obj = {}) {
      let chatbotConfig;
      try {
        const chatbotConfigText = localStorage.getItem('chatbotConfig');
        chatbotConfig = JSON.parse(chatbotConfigText);
      } catch (e) {
        chatbotConfig = {};
      }
      chatbotConfig = {
        ...chatbotConfig,
        ...obj,
      };
      localStorage.setItem('chatbotConfig', JSON.stringify(chatbotConfig));

      return chatbotConfig;
    },
    // 用遞迴去刪除 collapseOpen key，這個 key 是用來判斷是否展開的
    clearMessagesKey(obj) {
      if (typeof obj === 'object' && typeof obj.collapseOpen === 'boolean') {
        delete obj.collapseOpen;
      }
      if (typeof obj === 'object' && typeof obj.length === 'number') {
        obj = obj.map((item) => this.clearMessagesKey(item));
      } else if (typeof obj === 'object') {
        Object.entries(obj).forEach(([key, item]) => {
          if (typeof item === 'object') {
            item = this.clearMessagesKey(item);
          }
          obj[key] = item;
        });
      }
      return obj;
    },
    // 把輸入的 json 加上 collapseOpen key
    makeUpMessageKey(obj) {
      const defaultCollapseOpen = true;
      obj = obj.map((item) => {
        if (item.type === 'carousel') {
          item.columns = item.columns.map((column) => ({
            ...column,
            collapseOpen: defaultCollapseOpen,
          }));
        }
        return {
          ...item,
          collapseOpen: defaultCollapseOpen,
        };
      });
      return obj;
    },
    openNPMKit() {
      window.open('https://www.npmjs.com/package/@chi0307/transform-chatbot-message', '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-color1: #e6dacd;
$primary-color2: #f4ece6;
$white-color: #fcfbfa;
$warning-color: #ff0000;

[draggable='true'] {
  user-select: none;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  background: $primary-color2;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: $white-color;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $primary-color1;
}

.warning-border {
  border-color: $warning-color !important;
}

.all-view {
  padding: 20px;
  display: flex;
  height: calc(100vh - 40px);
  background-color: $primary-color2;

  .select-view {
    flex: 2;
    display: flex;
    flex-direction: column;

    .message-list {
      flex: 7;
      overflow-y: scroll;
      margin-bottom: 10px;
      border: $primary-color1 2px solid;

      .item {
        margin: 15px;
        height: 40px;
        background-color: $white-color;
        border: $primary-color1 2px solid;
        border-radius: 20px;
        cursor: pointer;
        line-height: 40px;
        text-align: center;
        overflow: hidden;
      }
    }

    .action-list {
      flex: 3;
      overflow-y: scroll;
      border: $primary-color1 2px solid;

      .item {
        margin: 15px;
        height: 40px;
        background-color: $white-color;
        border: $primary-color1 2px solid;
        border-radius: 20px;
        cursor: move;
        line-height: 40px;
        text-align: center;
        overflow: hidden;
      }
    }
  }

  .compose-view {
    flex: 6;

    .compose-inblock {
      margin-left: 30px;
      margin-right: 30px;
      padding-bottom: 10px;
      height: calc(100vh - 50px);
      overflow-y: scroll;

      .list-group {
        min-height: 100%;

        .item {
          background-color: $white-color;
          border: $primary-color1 2px solid;

          &:not(:last-child) {
            margin-bottom: 5px;
          }

          .title-block {
            width: calc(100% - 20px);
            height: 40px;
            margin: 0 10px 10px 10px;
            display: flex;

            &:first-child {
              margin-top: 10px;
            }

            .title {
              background-color: $primary-color1;
              line-height: 40px;
              text-align: center;
              width: calc(100% - 50px);
              cursor: pointer;
              position: relative;
              padding-left: 40px;
              padding-right: 40px;
              overflow: hidden;
            }

            .delete {
              background-color: #bfcbd9;
              margin-left: 10px;
              height: 40px;
              width: 40px;
              cursor: pointer;

              &:hover {
                background-color: $warning-color;
              }

              svg {
                margin: 5px;
                height: 30px;
                width: 30px;
                color: $white-color;
              }
            }
          }

          .content-block {
            margin: 10px;

            .list-group {
              margin-left: 30px;
            }
          }

          .bar-icon {
            position: absolute;
            top: 0px;
            left: 0px;
            height: 20px;
            width: 20px;
            padding: 10px;
            cursor: move;
          }
        }
      }
    }
  }

  .show-view {
    flex: 3;
    height: 100%;

    .setting-block {
      height: 40px;
      display: flex;
      padding: 0 20px 10px 20px;

      .button-block {
        flex: 1;
        height: 40px;
        margin-left: 20px;
        margin-right: 20px;
        text-align: center;

        .button {
          line-height: 40px;
          text-align: center;
          background-color: $white-color;
          border: $primary-color1 2px solid;
          border-radius: 40px;
          cursor: pointer;
        }
      }

      .npm-transform-chatbot-message-kit-button {
        line-height: 36px;
        background-color: $white-color;
        border: $primary-color1 2px solid;
        border-radius: 20px;
        cursor: pointer;
        margin-left: 10px;
        margin-right: 10px;

        &:hover {
          background-color: $primary-color1;
        }
      }
    }

    .change-view {
      margin-top: 10px;
      width: 100%;
      height: 30px;
      border: $primary-color1 2px solid;
    }

    .json-view {
      margin-top: 10px;
      height: calc(100% - 100px);
      border: $primary-color1 2px solid;
      background-color: $white-color;
      overflow-y: scroll;
      /* Track */
      &::-webkit-scrollbar-track {
        background: $white-color;
      }
      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: $primary-color2;
      }
      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: $primary-color1;
      }

      .jv-code {
        padding: 0;
      }
    }

    .text-view {
      margin-top: 10px;
      height: calc(100% - 100px);
      width: 100%;

      .textarea-input-box {
        height: calc(100% - 64px);
        width: calc(100% - 44px);
        padding: 30px 20px;
        border: $primary-color1 2px solid;
        background-color: $white-color;
        overflow-y: scroll;
        resize: none;

        /* Track */
        &::-webkit-scrollbar-track {
          background: $white-color;
        }
        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: $primary-color2;
        }
        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
          background: $primary-color1;
        }
      }
    }
  }
}

.input-block {
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;

  .input-description {
    flex: 1;
    line-height: 40px;
    text-align: center;
    background-color: $primary-color1;
    cursor: default;
    overflow: hidden;

    &-action {
      cursor: move;
    }
  }

  .input-content {
    flex: 4;
    border-color: $primary-color1;
    border-style: solid;
  }

  .input-content-action {
    flex: 2;
    border-color: $primary-color1;
    border-style: solid;
    border-right: 0px;
  }

  .input-content-action-delete {
    background-color: #bfcbd9;
    border: $primary-color1 2px solid;
    height: 36px;
    width: 36px;
    cursor: pointer;

    &:hover {
      background-color: $warning-color;
    }

    svg {
      margin: 5px;
      height: 30px;
      width: 30px;
      color: $white-color;
    }
  }

  .add-template-button {
    cursor: pointer;
    border: $primary-color1 2px solid;
    background-color: $white-color;

    &:hover {
      background-color: $primary-color1;
    }
  }

  .input-description-title {
    position: relative;
    cursor: pointer;
  }
}

.checkbox-block {
  height: 40px;

  line-height: 40px;
}
</style>

<style lang="scss">
.setting-modal {
  display: flex;
  flex-direction: column;
  padding: 20px;

  .list {
    flex: 1;
    height: 40px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
</style>
