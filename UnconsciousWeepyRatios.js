var a = '1000';
var b = '200';

console.log(a > b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 1000 trông có vẻ lớn hơn 200. Viết câu trả lời ở dưới đây.

// a > b vì a và b là string, a chữ cái đầu là '1' còn b có chữ cái đầu là '2'
// mà '2' có mã ANSCII lớn hơn '1' cho nên a > b