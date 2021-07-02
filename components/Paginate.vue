<template>
    <div class="paginate-class">
        <p class="left" @click="dec" :class="{ leftBan : value <= 1 }">-</p>
        <input type="text" class="input" @input="$emit('input', $event.target.value)" :value="value" readonly>
        <p class="right" @click="inc" :class="{ rightBan : value >= max }">+</p>
    </div>
</template>

<script>
export default {
    methods: {
        dec () {
            if (this.value <= 1) {
                return
            } else {
                let value = this.value - 1
                this.$emit('input', value)
            }
        },
        inc () {
            if (this.value >= this.max) {
                return
            } else {
                let value = this.value + 1
                this.$emit('input', value)
            }
        }
    },
    props: {
        value: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: 1
        }
    }
}
</script>

<style lang="scss" scoped>
    .paginate-class {
        width: 200px;
        height: 30px;
        border: 1px solid #C0C4CC;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-bottom: 25px;
        .left {
            width: 42px;
            background-color: #F5F7FA;
            border-radius: 4px 0px 0px 4px;
            border-right: 1px solid #C0C4CC;
            font-size: 23px;
            line-height: 25px;
            color: #606266;
            cursor: pointer;
        }
        .leftBan {
            cursor: not-allowed;
        }
        .right {
            width: 42px;
            background-color: #F5F7FA;
            border-radius: 0px 4px 4px 0px;
            border-left: 1px solid #C0C4CC;
            font-size: 20px;
            line-height: 30px;
            color: #606266;
            cursor: pointer;
        }
        .rightBan {
            cursor: not-allowed;
        }
        .input {
            text-align: center;
            line-height: 40px;
            width: 114px;
            border: none;
        }
    }
</style>