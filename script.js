var total = 0;
var arr;
var avg = 0;
function savedata(form) {
    arr = [form.name.value, form.branch.value, Number(form.web.value), Number(form.ai.value), Number(form.cd.value), Number(form.os.value), Number(form.dcn.value), Number(form.mnm.value)]
    console.log(arr)
    for (let index = 2; index < arr.length; index++) {
        total = total + arr[index];
                
    }
    avg = total / 6;

    document.getElementById("nameo").innerHTML = arr[0];
    document.getElementById("brancho").innerHTML = arr[1];
    document.getElementById("webo").innerHTML = arr[2];
    document.getElementById("aio").innerHTML = arr[3];
    document.getElementById("cdo").innerHTML = arr[4];
    document.getElementById("oso").innerHTML = arr[5];
    document.getElementById("dcno").innerHTML = arr[6];
    document.getElementById("mnmo").innerHTML = arr[7];
    document.getElementById("totalo").innerHTML = total;
    document.getElementById("avgo").innerHTML = Number(avg);
    }

    // function demoFromHTML() {
    // var doc = new jsPDF();
         
    // doc.text(100, 20, 'Report Card');

    // doc.text(20, 30, 'Name : '+arr[0]);
    // doc.text(20, 40, 'Branch : '+arr[1]);
    // doc.text(20, 50, 'Web Tech : '+arr[2]);
    // doc.text(20, 60, 'AI : '+arr[3]);
    // doc.text(20, 70, 'Compiler : '+arr[4]);
    // doc.text(20, 80, 'OS : '+arr[5]);
    // doc.text(20, 90, 'Computer Network : '+arr[6]);
    // doc.text(20, 100, 'MPMC : '+arr[7]);
    // doc.text(20, 110, 'Total : '+total);
    // doc.text(20, 120, 'Average : '+ Number(avg));

        
    //     // doc.addPage();
    //     // doc.text(20, 20, 'Do you like that?');

    // doc.save('Report.pdf');
    // }

    $(function () {

        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        $('#press').click(function () {
            var doc = new jsPDF();
            doc.fromHTML(
                // $('#target').html(), 15, 15,
                $('#target').html(), 28, -110,
                { 'width': 170, 'elementHandlers': specialElementHandlers },
                function () { doc.save('Report_Card.pdf'); }
            );
        });
    });