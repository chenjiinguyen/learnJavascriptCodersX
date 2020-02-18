var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
console.log(x);
// Nhấn Run để chạy code
// Thêm cách dấu cách vào dòng 4 để code dễ đọc hơn
// Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết ra từng dòng để giải thích

// a-- + b++ - ++b - ++a;
// a-- + 18 - ++b - ++a
// a-- + 18 - 20 - ++a
// a-- + 18 - 20 - 11
// 11 + 18 - 20 - 11


// 10 + b++ - ++b - ++a
// 10 + 18 - 19 - 11 