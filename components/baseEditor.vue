<template>
  <button @click="save">
    save
  </button>
  <div
      id="editorjs"
      class="editor-holder"
  >
  </div>
</template>

<script>
import EditorJs from '@editorjs/editorjs';
import Checklist from '@editorjs/checklist';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import Marker from '@editorjs/marker';
import NestedList from '@editorjs/nested-list';
import Quote from '@editorjs/quote';
import Raw from '@editorjs/raw';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';
import SimpleTest from '~/services/customDeliver.js'
import CustomDelimiter from "~/services/customDeliver.js";

export default {
  data() {
    return {
      editor: null
    }
  },
  methods: {
    save () {
  this.editor.save()
      .then((savedData) => {
        console.log('1111', savedData)
        // cPreview.show(savedData, document.getElementById("output"));
      })
      .catch((error) => {
        console.error('Saving error', error);
      });
}
  },
  mounted() {
    this.editor = new EditorJs({
      i18n: {
        messages: {
          ui: {
            // Translations of internal UI components of the editor.js core
          },
          toolNames: {
            // Section for translation Tool Names: both block and inline tools
          },
          tools: {
            // Section for passing translations to the external tools classes
            // The first-level keys of this object should be equal of keys ot the 'tools' property of EditorConfig
          },
          blockTunes: {
            // Section allows to translate Block Tunes
          },
        }
      },
      autofocus: true,
      placeholder: 'Type text or paste a link',
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['link', 'marker'],
        },
        image: {
          class: ImageTool,
          inlineToolbar: true,
          config: {
            types: 'image/jpeg, image/jpg, image/png, image/gif, video/mp4, video/quicktime',
            field: 'media',
            /**
             * Custom uploader to emulate image uploading without backend
             * @see https://github.com/editor-js/image#providing-custom-uploading-methods
             */
            uploader: {
              uploadByFile(file) {
                return new Promise((resolve) => {
                  const reader = new FileReader();

                  reader.onload = () => {
                    resolve({
                      success: 1,
                      file: {
                        url: reader.result,
                      }
                    })
                  };
                  reader.onerror = () => {
                    resolve({
                      success: 0,
                    })
                  };

                  reader.readAsDataURL(file);
                });
              },
              uploadByUrl(url){
                return new Promise((resolve) => {
                  resolve({
                    success: 1,
                    file: {
                      url
                    }
                  })
                })
              }
            }
          },
        },
        list: {
          class: NestedList,
          inlineToolbar: true
        },
        code: {
          class: Code,
          shortcut: 'CMD+SHIFT+D',
          toolbox: {
            // icon: '<svg>my icon code</svg>',
            title: 'Блок кода'
          }
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
        },
        delimiter: {
          class: CustomDelimiter,
        },
        embed: Embed,
        table: {
          class: Table,
          inlineToolbar: true
        },
        raw: Raw,
        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+C'
        },
        marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M'
        },
        warning: Warning,
        checklist: Checklist,
      },
    })
  }
}
</script>

<style lang="postcss">


.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,
.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {
  opacity: .8 !important;
}
</style>