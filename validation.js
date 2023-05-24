// jsonschema 모듈을 활용하여 json 데이터의 유효성을 검사합니다.
// 기존 gyoboStore.json의 데이터를 유효성 검사하기에 작성할 것이 많아
// 데이터 형식은 모두 동일하므로 novel 데이터만 가져와 유효성 검사를 실시했습니다.
const { Validator } = require('jsonschema');
const validator = new Validator();

// gyobostore.json에서 novel 데이터를 추출하여 bookData에 저장했습니다.
const bookData = {
  "novel": [
    {
      "type": "novel",
      "name": "메리골드 마음 세탁소",
      "author": "윤정은",
      "price": 15000,
      "bestSeller": true,
      "freeGift": null
    },
    {
      "type": "novel",
      "name": "헬로 마이 보이스",
      "author": "데라치 하루나",
      "price": 16800,
      "bestSeller": false,
      "freeGift": "볼펜"
    }
  ]
};

// bookData의 유효성 검사를 위해 스키마를 작성하였습니다.
// 검사 내용으로는
// bookData의 type이 object이면서 novel 요소를 가지는지,
// novel의 type이 array이면서 type을 구성하는 요소들이 object인지,
// novel을 이루는 object들이 name, author, price 등 각 요소를 가지고,
// 각각의 명시된 타입과 일치하는지 확인하고,
// novel의 필수 속성은 novel의 key 값을 할당하고,
// bookData의 필수 속성은 novel을 할당했습니다.
const schema = {
  type: 'object',
  properties: {
    novel: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          type: { type: 'string' },
          name: { type: 'string' },
          author: { type: 'string' },
          price: { type: 'number' },
          bestSeller: { type: 'boolean' },
          freeGift: { type: ['string', 'null'] }
        },
        required: ['type', 'name', 'author', 'price', 'bestSeller', 'freeGift']
      }
    }
  },
  required: ['novel']
};


// jsonschema의 validate메소드를 불러와 bookData의 데이터를
// schema 정의된 형식으로 유효성을 검사합니다.
// 만약 오류가 발생한다면 validation.errors 배열에 오류 내용을 추가합니다.
const validation = validator.validate(bookData, schema);

// 오류가 발생했을 시 Data is unvalid와 추가적으로 오류 내용을 출력하고,
// 데이터가 유효하면 Data is valid를 출력합니다.
if(validation.errors.length === 0) {
  console.log('Data is valid');
} else {
  console.log('Data is unvalid');
  console.log(validation.errors);
}