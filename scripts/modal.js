

const Modal = {
  props: ['tariff', 'time', 'price', 'day'],
  data() {
    return {
      source: {
        "normal-bg": "modal-fon",
        "normal-name": "NORMAL",
        "normal-gpu": "NVIDIA GeForce GTX 1650",
        "normal-cpu": "Intel Core i3-9100",
        "normal-ram": "16Gb, 3000Mhz",
        "normal-screen": "144Hz, 23.6\", закруглённый",
        "normal-mouse": "HIPER QUANTUM Q-M2",
        "normal-keyboard": "HIPER MK-2 CHASE",
        
        "normal-plus-bg": "modal-fon2",
        "normal-plus-name": "NORMAL+",
        "normal-plus-gpu": "NVIDIA GeForce GTX 1650",
        "normal-plus-cpu": "Intel Core i3-9100",
        "normal-plus-ram": "16Gb, 3200Mhz",
        "normal-plus-screen": "144Hz, 27\", закруглённый",
        "normal-plus-mouse": "HyperX Pulsefire",
        "normal-plus-keyboard": "HyperX Alloy Core RGB",
    
        "vip-bg": "modal-fon3",
        "vip-name": "VIP",
        "vip-gpu": "NVIDIA GeForce GTX 1660 SUPER",
        "vip-cpu": "Intel Core i5-9400F",
        "vip-ram": "16Gb, 3200Mhz",
        "vip-screen": "240Hz, 24.5\", плоский",
        "vip-mouse": "HyperX Pulsefire",
        "vip-keyboard": "HyperX Alloy FPS Pro",
    
        "tv-bg": "modal-fon4",
        "tv-name": "TV",
        "tv-screen": '144Hz 40" 4K Ultra HD',
        "tv-console": "PlayStation 5"
      }
    }
  },
  template:
  `
  <div id="myModal" class="modal">
    <div class="modal-content horizontal-centered">
        <div id="modal-title" :class="this.source[this.tariff + '-bg']">
            <div class="modal-tariff-wrapper vertical-centered">
                <h1 id="modal-tariff">Тариф "{{this.source[this.tariff + "-name"]}}"</h1>
            </div>
            <span class="close" @click="$emit('close')">&times;</span>
        </div>
        <div id="modal-info">
            <div id="modal-chars">
                <div class="modal-chars-title">
                    <div class="text-wrapper">
                        <h1>ИНФОРМАЦИЯ</h1>
                    </div>
                </div>
                <div class="modal-char">
                    <div class="text-wrapper">
                        <p>ДЕНЬ<span id="modal-weekday">{{day}}</span></p>
                    </div>
                    <div class="text-wrapper">
                        <p>ВРЕМЯ<span id="modal-time">{{time}}</span></p>
                    </div>
                    <div class="text-wrapper">
                        <p>ЦЕНА<span id="modal-price">{{price}}₽</span></p>
                    </div>
                </div>
            </div>
            <div id="modal-pc-wrapper">
                <div class="modal-pc-title">
                    <div class="text-wrapper">
                        <h1>ХАРАКТЕРИСТИКИ</h1>
                    </div>
                </div>
                <div id="modal-pc">
                    <div class="modal-pc-part" v-if="this.tariff != 'tv'">
                        <img src="src/gpu.png" />
                        <div class="text-wrapper">
                            <p id="gpu">{{this.source[this.tariff + "-gpu"]}}</p>
                        </div>
                    </div>
                    <div class="modal-pc-part" v-if="this.tariff != 'tv'">
                        <img src="src/cpu.png" />
                        <div class="text-wrapper">
                            <p id="cpu">{{this.source[this.tariff + "-cpu"]}}</p>
                        </div>
                    </div>
                    <div class="modal-pc-part" v-if="this.tariff != 'tv'">
                        <img src="src/ram.png" />
                        <div class="text-wrapper">
                            <p id="ram">{{this.source[this.tariff + "-ram"]}}</p>
                        </div>
                    </div>
                    <div class="modal-pc-part">
                        <img src="src/monitor.png" />
                        <div class="text-wrapper">
                            <p id="screen">{{this.source[this.tariff + "-screen"]}}</p>
                        </div>
                    </div>
                    <div class="modal-pc-part" v-if="this.tariff != 'tv'">
                        <img src="src/mouse.png" />
                        <div class="text-wrapper">
                            <p id="mouse">{{this.source[this.tariff + "-mouse"]}}</p>
                        </div>
                    </div>
                    <div class="modal-pc-part" v-if="this.tariff != 'tv'">
                        <img src="src/keyboard.png" />
                        <div class="text-wrapper">
                            <p id="keyboard">{{this.source[this.tariff + "-keyboard"]}}</p>
                        </div>
                    </div>
                    <div class="modal-pc-part" v-if="this.tariff == 'tv'">
                        <img src="src/console.png" />
                        <div class="text-wrapper">
                            <p id="keyboard">{{this.source[this.tariff + "-console"]}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  `,
  methods: {
  }
}

const Price = {
  props: ['tariff', 'price', 'time', 'day'],
  template:
  `<td class="price" @click="changeCurrentInfo"><span>{{price}}₽</span></td>`,
  methods: {
    changeCurrentInfo() {
      this.$emit('change', {
        "tariff": this.tariff,
        "price": this.price,
        "time": this.time,
        "day": this.day
      });
    }
  }
}

  // start app
  const app = Vue.createApp({
    components: {
      Modal,
      Price
    },
    data() {
      return {
        showModal: false,
        currentInfo: {
          "tariff": "",
          "price": "",
          "time": "",
          "day": ""
        }
      }
    },
    methods: {
      show() {
        this.showModal = true;
      },
      close() {
        this.showModal = false;
      },
      change(newInfo) {
        this.currentInfo = newInfo;
      }
    }
  });

  app.mount("#app")