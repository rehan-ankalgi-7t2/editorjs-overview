import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Embed from '@editorjs/embed'

const editor = new EditorJS({
    holder: 'editor',

    tools: {
        header: {
            class: Header,
            inlineToolbar: ['link']
        },
        list: {
            class: List,
            inlineToolbar: ['link', 'bold']
        },
        embed: {
            class: Embed,
            inlineToolbar: false,
            config: {
                services: {
                    youtube: true,
                    coub: true
                }
            }
        }
    }
})

let saveBtn = document.querySelector('button')

saveBtn.addEventListener('click', () => {
    editor.save().then((outputData) => {
        console.log('Artical data: ', outputData)
    }).catch((err) => {
        console.log(err)        
    });
})