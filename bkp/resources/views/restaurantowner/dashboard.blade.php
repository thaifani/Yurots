@extends('admin.layouts.master')
@section("title")
Dashboard
@endsection
@section('content')
<style>
    .fechar{
        position: fixed;
        z-index: 1000000;
        width: 30%;
        margin-left: 30%;
        background: red;
        color: white;
        text-align: center;
        padding: 20px 50px;
        margin-top: 100px;
        display: none;
    }
    #fecharofechar{
        background: white;
        color: red;
        width: 100%;
        float: left;
        cursor: pointer
    }
</style>
<div class="content mb-5">
    <div class="row mt-3">
        <div class="col-6 col-xl-3 mt-2">
            <div class="col-xl-12 dashboard-display p-3">
                <a class="block block-link-shadow text-left" href="javascript:void(0)">
                    <div class="block-content block-content-full clearfix">
                        <div class="float-right mt-10 d-none d-sm-block">
                            <i class="dashboard-display-icon icon-city"></i>
                        </div>
                        <div class="dashboard-display-number">{{ $restaurantsCount }}</div>
                        <div class="font-size-sm text-uppercase text-muted">Lojas</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-6 col-xl-3 mt-2">
            <div class="col-xl-12 dashboard-display p-3">
                <a class="block block-link-shadow text-left" href="javascript:void(0)">
                    <div class="block-content block-content-full clearfix">
                        <div class="float-right mt-10 d-none d-sm-block">
                            <i class="dashboard-display-icon icon-basket"></i>
                        </div>
                        <div class="dashboard-display-number">{{ $ordersCount }}</div>
                        <div class="font-size-sm text-uppercase text-muted">Pedidos processados</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-6 col-xl-3 mt-2">
            <div class="col-xl-12 dashboard-display p-3">
                <a class="block block-link-shadow text-left" href="javascript:void(0)">
                    <div class="block-content block-content-full clearfix">
                        <div class="float-right mt-10 d-none d-sm-block">
                            <i class="dashboard-display-icon icon-stack-star"></i>
                        </div>
                        <div class="dashboard-display-number">{{ $orderItemsCount }}</div>
                        <div class="font-size-sm text-uppercase text-muted">Itens Vendidos</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-6 col-xl-3 mt-2">
            <div class="col-xl-12 dashboard-display p-3">
                <a class="block block-link-shadow text-left" href="javascript:void(0)">
                    <div class="block-content block-content-full clearfix">
                        <div class="float-right mt-10 d-none d-sm-block">
                            <i class="dashboard-display-icon icon-coin-dollar"></i>
                        </div>
                        <div class="dashboard-display-number">{{ config('settings.currencyFormat') }}
                            {{ $totalEarning }}</div>
                        <div class="font-size-sm text-uppercase text-muted">Ganhos</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <input type="hidden" id="pedido_novo" value="N"/>
    <audio controls autoplay style="display:none" id="audio">
    <source src="https://bembarato.app/assets/backend/audio/new-order.mp3" type="audio/mpeg">
   </audio>
    <div class="row pt-4 p-0">
        <div class="col-xl-12">
            <div class="panel panel-flat dashboard-main-col mt-4">
                <div class="panel-heading">
                    <h4 class="panel-title pl-3 pt-3"><strong>Novos Pedidos</strong></h4>
                    <hr>
                </div>
                <div id="newOrdersTable" class="table-responsive @if(!count($newOrders)) hidden @endif">
                    <table class="table text-nowrap">
                        <thead>
                            <tr>
                                <th>ID do pedido</th>
                                <th class="text-center"><i class="
                                    icon-circle-down2"></i></th>
                                <th>Loja</th>
                                <th>PreÃ§o</th>
                                <th>Status do Pedido</th>
                            </tr>
                        </thead>
                        <tbody id="newOrdersData">
                            @foreach($newOrders as $nO)
                            <tr>
                                <td>
                                    <a href="{{ route('restaurant.viewOrder', $nO->unique_order_id) }}"
                                        class="letter-icon-title">{{ $nO->unique_order_id }}</a>
                                </td>
                                <td class="text-center">
                                    <a href="{{ route('restaurant.acceptOrder', $nO->id) }}"
                                        class="badge badge-primary badge-icon mr-2 acceptOrderBtn"> Aceitar pedido <i
                                            class="icon-checkmark3 ml-1"></i></a>
                                    <a href="{{ route('restaurant.cancelOrder', $nO->id) }}"
                                        class="badge badge-danger badge-icon cancelOrderBtn" data-popup="tooltip"
                                        data-placement="top" title="Clique duplo para cancelar"> Cancelar Pedido<i
                                            class="icon-cross ml-1"></i></a>
                                </td>
                                <td>
                                    {{ $nO->restaurant->name }}
                                </td>
                                <td>
                                    <span class="text-semibold no-margin">{{ config('settings.currencyFormat') }}
                                        {{ $nO->total }}</span>
                                </td>
                                <td>
                                    <span class="badge badge-flat border-grey-800 text-default text-capitalize">
                                        NOVO
                                    </span>
                                    @if($nO->delivery_type == 2)
                                    <span class="badge badge-flat border-danger-800 text-default text-capitalize">
                                        Coleta
                                    </span>
                                    @endif
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                @if(!count($newOrders))
                <div class="text-center text-muted pb-2" id="newOrdersNoOrdersMessage">
                    <h4> Nenhum pedido para exibir</h4>
                </div>
                @endif
            </div>
        </div>
        <div class="col-xl-12">
            <div class="panel panel-flat dashboard-main-col mt-4">
                <div class="panel-heading">
                    <h4 class="panel-title pl-3 pt-3"><strong>PEDIDOS PREPARANDO</strong></h4>
                    <hr>
                </div>
                @if(count($acceptedOrders))
                <div class="table-responsive">
                    <table class="table text-nowrap">
                        <thead>
                            <tr>
                                <th>ID do Pedido</th>
                                <th class="text-center"><i class="
                                    icon-circle-down2"></i></th>
                                <th>PreÃ§o</th>
                                <th>Tempo desde solicitado</th>
                                <th>Tempo desde aceito</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($acceptedOrders as $aO)
                            <tr>
                                <td>
                                    <a href="{{ route('restaurant.viewOrder', $aO->unique_order_id) }}"
                                        class="letter-icon-title">{{ $aO->unique_order_id }}</a>
                                </td>
                                <td class="text-center">
                                    @if($aO->delivery_type == 2 && $aO->orderstatus_id == 2)
                                    <a href="{{ route('restaurant.markOrderReady', $aO->id) }}"
                                        class="badge badge-warning badge-icon"> Mark as Ready <i
                                            class="icon-checkmark3 ml-1"></i></a>
                                    @endif
                                    @if($aO->delivery_type == 2 && $aO->orderstatus_id == 7)
                                    <a href="{{ route('restaurant.markSelfPickupOrderAsCompleted', $aO->id) }}"
                                        class="badge badge-success badge-icon"> Mark as Completed <i
                                            class="icon-checkmark3 ml-1"></i></a>
                                    @endif
                                    @if($aO->delivery_type == 1)
                                    <span>--</span>
                                    @endif
                                </td>
                                <td>
                                    <span class="text-semibold no-margin">{{ config('settings.currencyFormat') }}
                                        {{ $aO->total }}</span>
                                </td>
                                <td>
                                    {{ $aO->created_at->diffForHumans() }}
                                </td>
                                <td>
                                    {{ $aO->updated_at->diffForHumans() }}
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                    @else
                    <div class="text-center text-muted pb-2">
                        <h4> Nenhum pedido para mostrar</h4>
                    </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
<div class="fechar">
    <h1>Novo pedido!</h1>
    <span id="fecharofechar">Ok</span>
</div>
<script>
    $(function() {
        
    
        let array = @json($newOrdersJS);
        
        var audio = document.getElementById('audio');
    
        setInterval(function() {
            var pedido_novo = $("#pedido_novo").val();
            if(pedido_novo === 'S'){
                console.log('Nãooo');
                $(".fechar").show();
                var notification = document.createElement('audio');
                notification.setAttribute('src', '{{substr(url("/"), 0, strrpos(url("/"), '/'))}}/assets/backend/audio/new-order.mp3');
                notification.setAttribute('type', 'audio/mp3');
                notification.setAttribute('muted', 'muted');
                notification.play();
                
            }
            $.ajax({
                url: '{{ route('restaurant.getNewOrders') }}',
                type: 'GET',
                dataType: 'json',
            })
    
            .done(function(newArray) {
                if (JSON.stringify(array) !== JSON.stringify(newArray)) {
                    //if orders are not same so something here..
                    array = newArray;
                    //play sound
                     $("#pedido_novo").val('S');
                    
                    
                    var tableData = "";
                    $.map(newArray, function(item, index) {
                        if(item.delivery_type == 2) {
                            var selfPickup = '<span class="badge badge-flat border-danger-800 text-default text-capitalize">Self Pickup</span>'
                        } else {
                            selfPickup = "";
                        }
                        var viewOrderURL = "{{ url('/restaurant-owner/order') }}/" + item.unique_order_id;
                        var acceptedOrderURL = "{{ url('/restaurant-owner/orders/accept-order') }}/" + item.id;
                        var cancelOrderURL = "{{ url('/restaurant-owner/orders/cancel-order') }}/" + item.id;
                        tableData += '<tr><td> <a href="'+viewOrderURL+'" class="letter-icon-title">'+item.unique_order_id+'</a> </td>';
                        tableData += '<td class="text-center"> <a href="'+acceptedOrderURL+'" class="badge badge-primary badge-icon mr-2 acceptOrderBtn"> Aceitar pedido <i class="icon-checkmark3 ml-1"></i></a> <a href="'+cancelOrderURL+'" class="badge badge-danger badge-icon cancelOrderBtn" data-popup="tooltip" data-placement="top" title="Double Click to Cancel"> Cancelar pedido <i class="icon-cross ml-1"></i></a> </td>'
                        tableData += '<td>'+item.restaurant.name+'</td>';
                        tableData += '<td><span class="text-semibold no-margin">{{ config('settings.currencyFormat') }}'+item.total+'</span></td>';
                        tableData += '<td> <span class="badge badge-flat border-grey-800 text-default text-capitalize"> NEW </span> '+ selfPickup +'</td></tr>';
                        
                        $('#newOrdersData').html(tableData);
                        $('#newOrdersTable').removeClass('hidden')
                        $('#newOrdersNoOrdersMessage').remove();
                    });
                }
            })
            .fail(function() {
                console.log("error");
            })  
        }, 2 * 1000); //all API every 10 seconds...
    
    
        //on single click, accpet order and disable button
        $('body').on("click", ".acceptOrderBtn", function(e) {
            $(this).addClass('pointer-none');
        });
       

        $('body').on("click", "#fecharofechar", function(e) {
            $(".fechar").hide();
            $("#pedido_novo").val('N');
        });
        
    
        //on Single click donot cancel order
        $('body').on("click", ".cancelOrderBtn", function(e) {
            return false;
        });
        
        //cancel order on double click
        $('body').on("dblclick", ".cancelOrderBtn", function(e) {
            $(this).addClass('pointer-none');
            window.location = this.href;
            return false;
         });
    });
</script>
@endsection