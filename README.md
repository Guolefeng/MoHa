## MoHa: First mo and then hahhhhhhhhhh [WIP]

<img src="https://cloud.githubusercontent.com/assets/7693264/14355783/d45a1ea0-fd14-11e5-8b49-0e4a3866dce7.png" width="400">

> `风声雨声读书声，谈笑风生`  
> `The sound of Wind, Rain and Reading, just talk and laugh`  
> `家事国事天下事，三件小事`  
> `The affairs of Family, Country and World, just 3 little things`

## Installtion
```
npm i moha --save
```

## Features & Usage

### 1. Improving Life Experiences (Converter)
``` javascript
import {lifeExp} from 'moha'

let talks = '我是最好的。Great!'
let exps = lifeExp(talks)

console.log(exps) // Echo: 我是坠吼滴。Excited!
```
> Here is the [Exps Dict](https://github.com/IFELog/MoHa/blob/master/src/scripts/stores/exps-dict.js) which would make you say `Wow, MoHa is excited!`.

### 2. Making Big News with HK Journalists (Page Translator)
``` javascript
import {bigNews} from 'moha'

bigNews() // Current page will be halangify
```
### 3. Talking with the Elder (Generator)
- Todo: Imitate the elder and create an elder (Generator).

## How to Contribute?
**The first and the most important thing** is to create a puppet account on GitHub to keep yourself safe in the real world. When someone knocks on your door and says "Open the door, check the water meter!", please don't trust the guy and directly reply "Water meter is outside the door!".

## Dependencies
- [pangu.js](https://github.com/vinta/pangu.js) - 為什麼你們就是不能加個空格呢？

## References
- [蛤蛤体生成器](http://dkwingsmt.github.io/haha/)
- [把长者语言写进电脑](https://github.com/xiaq/halang/issues/1)
- [恶俗古风自动生成器](http://www.jianshu.com/p/f893291674ca)

## License
This work is licensed under the MIT license.
