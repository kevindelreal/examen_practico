<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Examen Practico</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    {{-- <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"> --}}

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('font-awesome/css/font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/datatables.bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('css/jquery-ui.css') }}">
    
    @yield('style')
</head>
<body>
    <div id="app">
        <main class="py-4">
            @if(session('info'))
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                
                                {{ session('info') }}
                            </div>
                        </div>
                    </div>
                </div>
            @endif
            
            @yield('content')
        </main>
    </div>
    
    <div class="col-lg-12" style="padding-top:-70px;">
        @yield('index')
    </div>

    <!-- All that javascript -->
    <script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>
    @yield('script')
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/sweetalert2.min.js') }}"></script>
</body>
</html>
