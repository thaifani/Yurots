<style>
.extra-menu{min-width:500px}@media (min-width:320px) and (max-width:767px){.extra-menu{min-width:auto}}
</style>
<meta charset="UTF-8" >
<div class="navbar navbar-expand-md navbar-dark">
    <div class="navbar-brand wmin-0 mr-5">
        @role("Admin")
        <a href="{{ route('admin.dashboard') }}" class="d-inline-block">
        <img src="{{substr(url("/"), 0, strrpos(url("/"), '/'))}}/assets/backend/global_assets/images/dashboard-logo.png" alt="Dashboard">
        </a>
        @endif
        @role("Restaurant Owner")
        <a href="{{ route('restaurant.dashboard') }}" class="d-inline-block">
        <img src="{{substr(url("/"), 0, strrpos(url("/"), '/'))}}/assets/backend/global_assets/images/dashboard-logo.png" alt="Dashboard">
        </a>
        @endrole
    </div>
    <div class="d-md-none">
        <button class="navbar-toggler dropdown-toggle" type="button" data-toggle="collapse" data-target="#navbar-mobile">
            <span>{{ Auth::user()->name }}</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right" id="navbar-mobile">
            <a href="{{ route('logout') }}" class="dropdown-item"><i class="icon-switch2"></i> Sair</a>
        </div>
    </div>
    <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown dropdown-user">
                <a href="#" class="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
                <span>{{ Auth::user()->name }}</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a href="{{ route('logout') }}" class="dropdown-item"><i class="icon-switch2"></i> Sair</a>
                </div>
            </li>
        </ul>
    </div>
</div>
<div class="navbar navbar-expand-md navbar-light navbar-sticky">
    <div class="container">
        <div class="text-center d-md-none w-100">
            <button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-navigation">
            <i class="icon-unfold mr-2"></i>
            Navegação
            </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar-navigation">
            <ul class="navbar-nav">
                @role("Admin")
                <li class="nav-item">
                    <a href="{{ route("admin.restaurants") }}" class="navbar-nav-link {{ Request::is('admin/restaurants') ? 'active' : '' }}">
                    <i class="icon-store2 mr-2"></i>
                    Lojas
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:void(0)" class="navbar-nav-link dropdown-toggle {{ Request::is('admin/items')  || Request::is('admin/addons') ? 'active' : '' }}" data-toggle="dropdown">
                    <i class="icon-stack-star mr-2"></i>
                    Produtos
                    </a>
                    <div class="dropdown-menu">
                    <a href="{{ route("admin.addonCategories") }}" class="dropdown-item {{ Request::is('admin/addoncategories') ? 'active' : '' }}">
                    <i class="icon-tree6 mr-2"></i>
                    Categoria de Adicionais
                    </a>
                    <a href="{{ route("admin.addons") }}" class="dropdown-item {{ Request::is('admin/addons') ? 'active' : '' }}">
                    <i class="icon-list2 mr-2"></i>
                    Adicionais
                    </a>
                    <a href="{{ route("admin.itemcategories") }}" class="dropdown-item {{ Request::is('admin/itemcategories') ? 'active' : '' }}">
                    <i class="icon-grid52 mr-2"></i>
                    Categoria
                    </a>
                    <a href="{{ route("admin.items") }}" class="dropdown-item {{ Request::is('admin/items') ? 'active' : '' }}">
                    <i class="icon-grid mr-2"></i>
                    Itens
                    </a>
                     </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:void(0)" class="navbar-nav-link dropdown-toggle  {{ Request::is('admin/users') || Request::is('admin/manage-delivery-guys') ? 'active' : '' }}" data-toggle="dropdown">
                    <i class="icon-users2 mr-2"></i>
                    Usuários
                    </a>
                    <div class="dropdown-menu">
                        <a href="{{ route("admin.users") }}" class="dropdown-item {{ Request::is('admin/users') ? 'active' : ''}}"> <i class="icon-users4 mr-2"></i> Todos Usuários</a>
                        <a href="{{ route('admin.manageRestaurantOwners') }}" class="dropdown-item {{ Request::is('admin/manage-restaurant-owners') ? 'active' : ''}}"> <i class="icon-user-tie mr-2"></i> Donos de Lojas</a>
                        <a href="{{ route('admin.manageDeliveryGuys') }}" class="dropdown-item {{ Request::is('admin/manage-delivery-guys') ? 'active' : ''}}"> <i class="icon-truck mr-2"></i> Entregadores</a> 
                    </div>
                </li>
                <li class="nav-item">
                    <a href="{{ route("admin.orders") }}" class="navbar-nav-link {{ Request::is('admin/orders') ? 'active' : '' }}">
                    <i class="icon-basket mr-2"></i>
                    Pedidos
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:void(0)" class="navbar-nav-link dropdown-toggle  {{ Request::is('admin/sliders') || Request::is('admin/coupons') || Request::is('admin/notifications') ? 'active' : '' }}" data-toggle="dropdown">
                    <i class="icon-strategy mr-2"></i>
                    Extras
                    </a>
                    <div class="dropdown-menu">
                        <div class="row extra-menu">
                            <div class="col-md-6">
                                <a href="{{ route('admin.sliders') }}" class="dropdown-item {{ Request::is('admin/sliders') ? 'active' : '' }}">
                                <i class="icon-image2 mr-2"></i>
                                Sliders promocionais
                                </a>
                                 <a href="{{ route("admin.restaurantCategorySlider") }}" class="dropdown-item {{ Request::is('admin/restaurant-category-slider') ? 'active' : '' }}">
                                <i class="icon-grid52 mr-2"></i>
                                Slider Categoria de Lojas
                                </a>
                                <a href="{{ route('admin.coupons') }}" class="dropdown-item {{ Request::is('admin/coupons') ? 'active' : '' }}">
                                <i class="icon-price-tags2 mr-2"></i>
                                Gerenciar Cupons
                                </a>
                                <a href="{{ route('admin.pages') }}" class="dropdown-item {{ Request::is('admin/pages') ? 'active' : '' }}">
                                <i class="icon-files-empty mr-2"></i>
                                Gerenciar Páginas
                                </a>
                                <a href="{{ route("admin.popularGeoLocations") }}" class="dropdown-item {{ Request::is('admin/popular-geo-locations') ? 'active' : '' }}">
                                <i class="icon-location3 mr-2"></i>
                                Localizações Populares
                                </a>
                                <a href="{{ route('admin.notifications') }}" class="dropdown-item {{ Request::is('admin/notifications') ? 'active' : '' }}">
                                <i class="icon-bubble-dots4 mr-2"></i>
                                Enviar Notificações Push
                                </a>
                                
                            </div>
                            <div class="col-md-6">
                                <a href="{{ route('admin.restaurantpayouts') }}" class="dropdown-item {{ Request::is('admin/restaurant-payouts') ? 'active' : '' }}">
                                <i class="icon-piggy-bank mr-2"></i>
                                Pagamentos dos Lojas
                                </a>
                                <a href="{{ route("admin.translations") }}" class="dropdown-item {{ Request::is('admin/translations') ? 'active' : '' }}">
                                <i class="icon-font-size2 mr-2"></i>
                                Traduções
                                </a>
                                <a href="{{ route("admin.deliveryCollections") }}" class="dropdown-item {{ Request::is('admin/delivery-collections') ? 'active' : '' }}">
                                <i class="icon-cash3 mr-2"></i>
                                Coletas do Delivery
                                </a>
                                <a href="{{ route("admin.deliveryCollectionLogs") }}" class="dropdown-item {{ Request::is('admin/delivery-collection-logs') ? 'active' : '' }}">
                                <i class="icon-database-time2 mr-2"></i>
                                Logs Coletas do Delivery
                                </a>
                                <a href="{{ route("admin.walletTransactions") }}" class="dropdown-item {{ Request::is('admin/wallet/transactions') ? 'active' : '' }}">
                                <i class="icon-transmission mr-2"></i>
                                Transações de carteira
                                </a>
                                <a href="{{ route("admin.viewTopItems") }}" class="dropdown-item {{ Request::is('admin/reports/top-items') ? 'active' : '' }}">
                                <i class="icon-graph mr-2"></i>
                                Relatórios
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <ul class="navbar-nav ml-md-auto">
                    <li class="nav-item">
                        <a href="{{ route('admin.settings') }}" class="navbar-nav-link {{ Request::is('admin/settings') ? 'active' : '' }}" data-popup="tooltip" title="Todas Configurações" data-placement="bottom">
                        <i class="icon-cog3 mr-2"></i>
                        Configurações
                        </a>
                    </li>
                </ul>
                @endrole
                @role("Restaurant Owner")
                <li class="nav-item">
                    <a href="{{ route("restaurant.restaurants") }}" class="navbar-nav-link {{ Request::is('restaurant-owner/restaurants') ? 'active' : '' }}">
                    <i class="icon-store2 mr-2"></i>
                    Lojas
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:void(0)" class="navbar-nav-link dropdown-toggle {{ Request::is('restaurant-owner/items')  || Request::is('restaurant-owner/addons') ? 'active' : '' }}" data-toggle="dropdown">
                    <i class="icon-stack-star mr-2"></i>
                    Itens & Cardápio
                    </a>
                    <div class="dropdown-menu">
                    <a href="{{ route("restaurant.addonCategories") }}" class="dropdown-item {{ Request::is('restaurant-owner/addoncategories') ? 'active' : '' }}">
                    <i class="icon-tree6 mr-2"></i>
                    Categorias de Adicionais
                    </a>
                    <a href="{{ route("restaurant.addons") }}" class="dropdown-item {{ Request::is('restaurant-owner/addons') ? 'active' : '' }}">
                    <i class="icon-list2 mr-2"></i>
                    Adicionais
                    </a>
                    <a href="{{ route("restaurant.itemcategories") }}" class="dropdown-item {{ Request::is('restaurant-owner/itemcategories') ? 'active' : '' }}">
                    <i class="icon-grid52 mr-2"></i>
                    Categorias
                    </a>
                    <a href="{{ route("restaurant.items") }}" class="dropdown-item {{ Request::is('restaurant-owner/items') ? 'active' : '' }}">
                    <i class="icon-grid mr-2"></i>
                    Itens
                    </a>
                     </div>
                </li>
                <li class="nav-item">
                    <a href="{{ route("restaurant.orders") }}" class="navbar-nav-link {{ Request::is('restaurant-owner/orders') ? 'active' : '' }}">
                    <i class="icon-basket mr-2"></i>
                    Pedidos
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route("restaurant.earnings") }}" class="navbar-nav-link {{ Request::is('restaurant-owner/earnings/*') ? 'active' : '' }}">
                    <i class="icon-coin-dollar mr-2"></i>
                    Ganhos
                    </a>
                </li>
                @endrole
            </ul>
        </div>
    </div>
</div>