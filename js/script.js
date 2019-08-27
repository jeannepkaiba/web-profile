var pesertaCodingClass = [
    {
        nama: "~ Kakarlak",
        hoby: [
            "Aku adalah titipan sementara untukmu. Kamu adalah titipan sementara untukku. Perpisahan Dari-Nya merupakan tanda bahwa masa titipan antara aku dan kamu telah selesai",
        ]
    },
    {
        nama: "~ Kakarlak",
        hoby: [
            "Kenangan akan tetap menetap dalam otak ini. Namun untuk kembali kepelukanmu sepertinya tidak akan pernah terjadi."
        ]
    },
    {
        nama: "~ Kakarlak",
        hoby: [
            "Yang katanya tidak akan pergi untuk meninggalkan pada akhirnya akan pergi juga. Yang katanya aku begitu mencintaimu juga pada akhirnya akan mencintai orang lain."
        ]
    },
    {
        nama: "~ Kakarlak",
        hoby: [
            "Aku dan kamu itu dipertemukan hanya untuk sementara, yang berakhir untuk saling melupakan, bukan berujung pada pelaminan."
        ]
    },
    {
        nama: "~ Kakarlak",
        hoby: [
            "Ingin rasanya menjadi pesawat, kemanapun dia pergi, kemanapun dia berhenti, dia pasti memiliki tempat yang dituju dan satu yang perlu diingat bahwa tujuannya itu pasti."
        ]
    },
    {
        nama: "~ Kakarlak",
        hoby: [
            "Benar katamu sayang, jika langit sedang mendung, senja yang kunanti-nantikan tak akan terlihat walau hanya sedikit saja, karena telah tertutup oleh mendungnya langit hari ini."
        ]
    },
    {
        nama: "~ Kakarlak",
        hoby: [
            "Jika sekarang kukatakan aku sedang rindu denganmu, apakah kamu juga rasakan hal yang sama seperti yang ku rasakan? Ah sudahlah sayang tak usah dibahas lagi soal rindu karena aku tahu betul bahwa aku dan kamu itu sama, iya sama, sama-sama saling merindukan."
        ]
    },
    {
        nama: "~ Kakarlak",
        hoby: [
            "Jangan pernah memberi jarak sayang antara aku dan kamu walau hanya sejengkal saja. Bagaimana jika jarak yang kau berikan ini malah membuatkunpergi darimu?"
        ]
    },
    {
        nama: "~ Kakarlak",
        hoby: [
            "Jangan khawatir, jika bukan pasanganmu yang mengatakan aku bersyukur memilikimu, tenang akan ada cowok lain yang mengatakan itu."
        ]
    },
];

var konten = "";

for (var i = 0; i < pesertaCodingClass.length; i++) {

    konten += '<div class="col-sm-4 mb-4">' +
        '<div class="card">' +
        '<h5 class="card-title">' + pesertaCodingClass[i].nama + '</h5>' +
        '<p class="card-text"><ul class="list-group">';

    for (var j = 0; j < pesertaCodingClass[i].hoby.length; j++) {
        konten += '<li class="list-group-item">' + pesertaCodingClass[i].hoby[j] + '</li>';
    }

    konten += '</ul></p>' +
        '</div>' +
        '</div>' +
        '</div>';

}

document.querySelector('#wrapper').innerHTML = konten;