@extends('admin.layouts.master')
@section("title") Lojas - Dashboard
@endsection
@section('content')
<style>
    .delivery-div {
        background-color: #fafafa;
        padding: 1rem;
    }
    .location-search-block {
        position: relative;
        top: -26rem;
        z-index: 999;
    }
</style>
<div class="page-header">
    <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
            <h4><i class="icon-circle-right2 mr-2"></i>
                <span class="font-weight-bold mr-2">TOTAL</span>
                <span class="badge badge-primary badge-pill animated flipInX">{{ count($restaurants) }}</span>
            </h4>
            <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
        </div>
        <div class="header-elements d-none py-0 mb-3 mb-md-0">
            <div class="breadcrumb">
                <button type="button" class="btn btn-secondary btn-labeled btn-labeled-left mr-2" id="addNewRestaurant"
                    data-toggle="modal" data-target="#addNewRestaurantModal">
                <b><i class="icon-plus2"></i></b>
                Adicionar Nova loja
                </button>
            </div>
        </div>
    </div>
</div>
<div class="content">
    <div class="card">
        <div class="card-body">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Imagem</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Status</th>
                            <th style="width: 15%">Criado em</th>
                            <th class="text-center" style="width: 10%;"><i class="
                                icon-circle-down2"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($restaurants as $restaurant)
                        <tr>
                            <td>{{ $restaurant->id }}</td>
                            <td><img src="{{substr(url("/"), 0, strrpos(url("/"), '/'))}}{{ $restaurant->image }}" alt="{{ $restaurant->name }}" height="80" width="80" style="border-radius: 0.275rem;"></td>
                            <td>{{ $restaurant->name }}</td>
                            <td>{{ $restaurant->address }}</td>
                            <td>
                                @if(!$restaurant->is_accepted)
                                <span class="badge badge-flat border-grey-800 text-default text-capitalize">
                                Pendente
                                </span>
                                @endif
                                <span class="badge badge-flat border-grey-800 text-default text-capitalize">
                                @if($restaurant->is_ativo) Ativo @else Inativo @endif
                                </span>
                            </td>
                            <td>{{ $restaurant->created_at->diffForHumans() }}</td>
                            <td class="text-center">
                                <div class="btn-group btn-group-justified">
                                    <a href="{{ route('restaurant.get.editRestaurant', $restaurant->id) }}"
                                        class="badge badge-primary badge-icon"> EDITAR <i
                                        class="icon-database-edit2 ml-1"></i></a>
                                    @if($restaurant->is_active)
                                    <a href="{{ route('restaurant.disableRestaurant', $restaurant->id) }}" class="badge badge-primary badge-icon ml-1" data-popup="tooltip" title="Desativar Loja" data-placement="bottom"> <i class="icon-switch2"></i> </a>
                                    @else
                                    <a href="{{ route('restaurant.disableRestaurant', $restaurant->id) }}" class="badge badge-danger badge-icon ml-1" data-popup="tooltip" title="Ativar Loja" data-placement="bottom"> <i class="icon-switch2"></i> </a>
                                    @endif
                                 </div>
                            </td>
                            
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<div id="addNewRestaurantModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"><span class="font-weight-bold">Adicionar Nova loja</span></h5>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                <form action="{{ route('restaurant.saveNewRestaurant') }}" method="POST" enctype="multipart/form-data">
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Nome do Loja:</label>
                        <div class="col-lg-9">
                            <input type="text" class="form-control form-control-lg" name="name"
                                placeholder="Nome do Loja" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Descrição:</label>
                        <div class="col-lg-9">
                            <input type="text" class="form-control form-control-lg" name="description"
                                placeholder="Descrição curta do Loja" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Imagem:</label>
                        <div class="col-lg-9">
                            <img class="slider-preview-image hidden"/>
                            <div class="uploader">
                                <input type="file" class="form-control-lg form-control-uniform" name="image" required accept="image/x-png,image/gif,image/jpeg" onchange="readURL(this);">
                                <span class="help-text text-muted">Tamanho da imagem: 160x117</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Tempo aproximado de entrega:</label>
                        <div class="col-lg-9">
                            <input type="text" class="form-control form-control-lg delivery_time" name="delivery_time"
                                placeholder="Tempo em minutos" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Preço aprox. para dois:</label>
                        <div class="col-lg-9">
                            <input type="text" class="form-control form-control-lg price_range" name="price_range"
                                placeholder="Preço aproximado para 2 pessoas em {{ config('settings.currencyFormat') }}" required>
                        </div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Endereço completo:</label>
                        <div class="col-lg-9">
                            <input type="text" class="form-control form-control-lg" name="address"
                                placeholder="Endereço completo do Loja" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label" data-popup="tooltip" title="Pincode / Postcode / Zip Code" data-placement="bottom">CEP:</label>
                        <div class="col-lg-9">
                            <input type="text" class="form-control form-control-lg" name="pincode"
                                placeholder="CEP">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Ponto de Referência:</label>
                        <div class="col-lg-9">
                            <input type="text" class="form-control form-control-lg" name="landmark"
                                placeholder="Ponto de Referência">
                        </div>
                    </div>
                    <fieldset class="gllpLatlonPicker">
                        {{-- <div width="100%" id="map" class="gllpMap" style="position: relative; overflow: hidden;"></div> --}}
                        <div class="form-group row">
                            <div class="col-lg-6">
                                <label class="col-form-label">Latitude:</label><input type="text" class="form-control form-control-lg gllpLatitude latitude" value="40.6976701" name="latitude" placeholder="Latitude do Loja" required="required" >
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label">Longitude:</label><input type="text" class="form-control form-control-lg gllpLongitude longitude" value="-74.2598672" name="longitude" placeholder="Longitude do Loja" required="required">
                            </div>
                        </div>
                        {{-- <input type="hidden" class="gllpZoom" value="20">
                        <div class="d-flex justify-content-center">
                            <div class="col-lg-6 d-flex location-search-block">       
                                <input type="text" class="form-control form-control-lg gllpSearchField" placeholder="Pesquisar por Loja, cidade...">
                                <button type="button" class="btn btn-primary gllpSearchButton">Search</button>
                            </div>
                        </div> --}}
                        <span class="text-muted">Você pode usar serviços como: <a href="https://www.mapcoordinates.net/en">https://www.mapcoordinates.net/en</a></span> <br> Se você inserir uma latitude / longitude inválida, o sistema de mapas poderá falhar com uma tela branca.
                    </fieldset>
                    <hr>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">WhatsApp</label>
                        <div class="col-lg-9">
                            <input type="text" class="form-control form-control-lg" name="certificate"
                                placeholder="Digite o número com ddd e sem (, - ou espaços">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Taxa do Loja (embalagem/extra):</label>
                        <div class="col-lg-9">
                            <input type="text" class="form-control form-control-lg restaurant_charges" name="restaurant_charges"
                                placeholder="Taxa do Loja em {{ config('settings.currencyFormat') }}">
                        </div>
                    </div>
                    @if(config("settings.enSPU") == "true")
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Tipo de entrega:</label>
                        <div class="col-lg-9">
                            <select class="form-control select-search" name="delivery_type" required>
                                <option value="1" class="text-capitalize">Delivery</option>
                                <option value="2" class="text-capitalize">Retirada</option>
                                <option value="3" class="text-capitalize">Ambos Delivery e Retirada</option>
                            </select>
                        </div>
                    </div>
                    @endif
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Raio de entrega em Km:</label>
                        <div class="col-lg-9">
                            <input type="text" class="form-control form-control-lg delivery_radius" name="delivery_radius"
                                placeholder="Raio de entrega em km (Se deixado em branco, o raio de entrega será definido para 10 km)">
                        </div>
                    </div>
                    <div class="delivery-div">
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Tipo de taxa de entrega:</label>
                            <div class="col-lg-9">
                                <select class="form-control select-search" name="delivery_charge_type" required>
                                    <option value="FIXED" class="text-capitalize">Taxa Fixa</option>
                                    <option value="DYNAMIC" class="text-capitalize">Taxa Dinâmica</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row" id="deliveryCharge">
                            <label class="col-lg-3 col-form-label">Taxa de entrega:</label>
                            <div class="col-lg-9">
                                <input type="text" class="form-control form-control-lg delivery_charges" name="delivery_charges"
                                    placeholder="Taxa de entrega em {{ config('settings.currencyFormat') }}">
                            </div>
                        </div>
                        <div id="dynamicChargeDiv" class="hidden">
                            <div class="form-group">
                                <div class="col-lg-12 row">
                                    <div class="col-lg-3">
                                        <label class="col-lg-12 col-form-label">Taxa básica de entrega:</label>
                                        <input type="text" class="form-control form-control-lg base_delivery_charge" name="base_delivery_charge"
                                            placeholder="Em {{ config('settings.currencyFormat') }}">
                                    </div>
                                    <div class="col-lg-3">
                                        <label class="col-lg-12 col-form-label">Distância Base de Entrega:</label>
                                        <input type="text" class="form-control form-control-lg base_delivery_distance" name="base_delivery_distance"
                                            placeholder="Em (KM)">
                                    </div>
                                    <div class="col-lg-3">
                                        <label class="col-lg-12 col-form-label">Taxa extra de entrega:</label>
                                        <input type="text" class="form-control form-control-lg extra_delivery_charge" name="extra_delivery_charge"
                                            placeholder="Em {{ config('settings.currencyFormat') }}">
                                    </div>
                                    <div class="col-lg-3">
                                        <label class="col-lg-12 col-form-label">Distância de Entrega Extra:</label>
                                        <input type="text" class="form-control form-control-lg extra_delivery_distance" name="extra_delivery_distance" placeholder="Em (KM)">
                                    </div>
                                </div>
                                <p class="help-text mt-2 mb-0 text-muted"> As taxas de entrega base serão aplicadas à distância de entrega base. E para cada distância extra de entrega, será aplicada uma taxa de entrega extra.</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">É vegetariano?</label>
                        <div class="col-lg-9">
                            <div class="checkbox checkbox-switchery mt-2">
                                <label>
                                <input value="true" type="checkbox" class="switchery-primary" checked="checked" name="is_pureveg">
                                </label>
                            </div>
                        </div>
                    </div>
             

                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Preço mínimo de pedido</label>
                        <div class="col-lg-9">
                            <input type="text" required class="form-control form-control-lg min_order_price" name="min_order_price"
                                placeholder="Valor mínimo do pedido {{ config('settings.currencyFormat') }}">
                        </div>
                    </div>

                    
                    <div class="form-group row">

                        <label class="col-lg-12 col-form-label"><span class="text-danger">*</span>Concordo em pagar o entregador no ato da retirada do produto e que o valor da entrega não deve ser menos que 3 reais.</label>

                        <div class="col-lg-12">

                            <select class="form-control select-search" name="motoboy" required>

                                <option value="N" class="text-capitalize">Não</option>
                                <option value="S" class="text-capitalize">Sim</option>

                            </select>

                        </div>

                    </div>
                    
                    <div class="form-group row">

                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Motoboy próprio? cadastre ele..</label>

                        <div class="col-lg-9">

                            <div class="form-group form-group-feedback form-group-feedback-left">

                                <input type="text" class="form-control" placeholder="Nome completo" name="motoboy_name">

                                <div class="form-control-feedback">

                                    <i class="icon-user text-muted"></i>

                                </div>

                            </div>

                            <div class="form-group form-group-feedback form-group-feedback-left">

                                <input type="text" class="form-control" placeholder="Email" name="motoboy_email">

                                <div class="form-control-feedback">

                                    <i class="icon-mail5 text-muted"></i>

                                </div>

                            </div>

                            <div class="form-group form-group-feedback form-group-feedback-left">

                                <input type="number" class="form-control" placeholder="Telefone" name="motoboy_phone" min="8">

                                <div class="form-control-feedback">

                                    <i class="icon-mobile text-muted"></i>

                                </div>

                            </div>

                            <div class="form-group form-group-feedback form-group-feedback-left">

                                <input type="password" class="form-control" placeholder="Senha" name="motoboy_password">

                                <div class="form-control-feedback">

                                    <i class="icon-lock2 text-muted"></i>

                                </div>

                            </div>
                            
                <div class="form-group form-group-feedback form-group-feedback-left">
                    <input type="text" class="form-control form-control-lg" name="delivery_description" placeholder="Digite a CNH do entregador">
                    <div class="form-control-feedback">
                        <i class="icon-lock2 text-muted"></i>
                    </div>
                </div>
                <div class="form-group form-group-feedback form-group-feedback-left">
                    <input type="text" class="form-control form-control-lg" name="delivery_vehicle_number" placeholder="Digite o número do veículo do entregador">
                    <div class="form-control-feedback">
                        <i class="icon-lock2 text-muted"></i>
                    </div>
                </div>

                        </div>

                    </div>
                    
                     <fieldset class="gllpLatlonPicker">

                        <div class="form-group row">

                            <div class="col-lg-4">

                                <label class="col-form-label">Banco:</label>
                                <input type="text" class="form-control form-control-lg" name="banco" required="required">
                            </div>

                            <div class="col-lg-4">

                                <label class="col-form-label">Agência:</label>
                                <input type="text" class="form-control form-control-lg" name="agencia" required="required">

                            </div>
                            
                            <div class="col-lg-4">

                                <label class="col-form-label">Conta:</label>
                                <input type="text" class="form-control form-control-lg " name="conta" required="required">

                            </div>

                        </div>

                    </fieldset>

                    <hr>
                    @csrf
                    <div class="text-right">
                        <button type="submit" class="btn btn-primary">
                        SALVAR
                        <i class="icon-database-insert ml-1"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script>
    function readURL(input) {
       if (input.files && input.files[0]) {
           let reader = new FileReader();
           reader.onload = function (e) {
               $('.slider-preview-image')
                   .removeClass('hidden')
                   .attr('src', e.target.result)
                   .width(160)
                   .height(117)
                   .css('borderRadius', '0.275rem');
           };
           reader.readAsDataURL(input.files[0]);
       }
    }
    $(function () {
       $('.select-search').select2({
           minimumResultsForSearch: Infinity,
           placeholder: 'Select Location',
       });
    
       var primary = document.querySelector('.switchery-primary');
       var switchery = new Switchery(primary, { color: '#2196F3' });
       
       $('.form-control-uniform').uniform();

       $('.delivery_time').numeric({allowThouSep:false});
       $('.price_range').numeric({allowThouSep:false});
       $('.latitude').numeric({allowThouSep:false});
       $('.longitude').numeric({allowThouSep:false});
       $('.restaurant_charges').numeric({ allowThouSep:false, maxDecimalPlaces: 2 });
       $('.delivery_charges').numeric({ allowThouSep:false, maxDecimalPlaces: 2 });
        $('.min_order_price').numeric({ allowThouSep:false, maxDecimalPlaces: 2, allowMinus: false });
    });
    
</script>
@endsection