var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = Quantics","category":"page"},{"location":"#Quantics","page":"Home","title":"Quantics","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for Quantics.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [Quantics]","category":"page"},{"location":"#Quantics.ImaginaryTimeFT","page":"Home","title":"Quantics.ImaginaryTimeFT","text":"For imaginary-time/-frequency domains\n\n\n\n\n\n","category":"type"},{"location":"#Quantics._asdiagonal-Union{Tuple{T}, Tuple{Any, ITensors.Index{T}}} where T<:Number","page":"Home","title":"Quantics._asdiagonal","text":"Convert an MPS tensor to an MPO tensor with a diagonal structure\n\n\n\n\n\n","category":"method"},{"location":"#Quantics._binaryop_mpo-Union{Tuple{T}, Tuple{Array{ITensors.Index{T}, 1}, Vector{Tuple{Int64, Int64}}, Vector{Tuple{Int64, Int64}}}} where T<:Number","page":"Home","title":"Quantics._binaryop_mpo","text":"Construct an MPO representing a selector associated with binary operations.\n\nWe describe the functionality for length(coeffs) = 2 (nsitesbop). In this case, site indices are split into a list of chuncks of nsitesbop sites.\n\nBinary operations are applied to each chunck and the direction of carry is forward (revcarrydirec=true) or backward (revcarrydirec=false).\n\nAssumed revcarrydirec = true, we consider a two-variable g(x, y), which is quantized as x = (x1 ... xR)2, y = (y1 ... yR)_2.\n\nWe now define a new function by binary operations as f(x, y) = g(a * x + b * y, c * x + d * y), where a, b, c, d = +/- 1, 0, and s1, s1 are arbitrary integers.\n\nThe transform from g to f can be represented as an MPO: f(x1, y1, ..., xR, yR) = M(x1, y1, ...; x'1, y'1, ...) f(x'1, y'1, ..., x'R, y'R).\n\nThe MPO M acts a selector: The MPO selects values from f to form g.\n\nFor revcarrydirec = false, the returned MPO represents f(xR, yR, ..., x1, y1) = M(xR, yR, ...; x'R, y'R, ...) f(x'R, y'R, ..., x'1, y'_1).\n\nbc is a vector of boundary conditions for each arguments of g (not of f).\n\n\n\n\n\n","category":"method"},{"location":"#Quantics._binaryop_tensor-Union{Tuple{T}, Tuple{Int64, Int64, ITensors.Index{T}, ITensors.Index{T}, ITensors.Index{T}, Bool, Bool, Int64}} where T","page":"Home","title":"Quantics._binaryop_tensor","text":"a  x + b  y, where a = 0 pm 1 and b = 0 pm 1 (a + b neq -2).\n\n         out\n          |\n       --------\n cin --|  T   |-- cout\n       --------\n        |    |\n        x    y\n\nT_x y mathrmout mathrmcin mathrmcout = 1 if a  x + b  y + mathrmcin = mathrmcout, =0 otherwise (out is the output bit).\n\n\n\n\n\n","category":"method"},{"location":"#Quantics._directprod-Tuple{ITensors.ITensorMPS.MPS, Vararg{ITensors.ITensorMPS.MPS}}","page":"Home","title":"Quantics._directprod","text":"Connect two MPS's ITensor objects are deepcopied.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics._qft-Tuple{Any}","page":"Home","title":"Quantics._qft","text":"Create a MPO for Fourier transform\n\nWe define two integers using the binary format: x = (x_1 x_2  x_N)_2, y = (y_1 y_2  y_N)_2, where the right most digits are the least significant digits.\n\nOur definition of the Fourier transform is\n\n    Y(y) = frac1sqrtN sum_x=0^N-1 X(x) e^s i frac2pi y xN = sum_x=0^N-1 T(y x) X(x)\n\nwhere we define the transformation matrix T and s = pm 1.\n\nThe created MPO can transform an input MPS as follows. We denote the input and output MPS's by X and Y, respectively.\n\nX(x_1  x_N) = X_1(x_1)  X_N (x_N),\nY(y_N  y_1) = Y_1(y_N)  Y_N (y_1).\n\n\n\n\n\n","category":"method"},{"location":"#Quantics._qft_nsite1_wo_norm-Tuple{Any}","page":"Home","title":"Quantics._qft_nsite1_wo_norm","text":"For length(sites) == 1 The resultant MPO is NOT renormalized.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics._reverse-Tuple{ITensors.ITensorMPS.MPO}","page":"Home","title":"Quantics._reverse","text":"Reverse the order of the MPS/MPO tensors The order of the siteinds are reversed in the returned object.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics._shift_mpo-Union{Tuple{T}, Tuple{Array{ITensors.Index{T}, 1}, Int64}} where T<:Number","page":"Home","title":"Quantics._shift_mpo","text":"For given function g(x) and shift s, construct an MPO representing f(x) = g(x + s). x: 0, ..., 2^R - 1 0 <= s <= 2^R - 1\n\nWe assume that left site indices correspond to significant digits\n\n\n\n\n\n","category":"method"},{"location":"#Quantics._zero_mpo-Tuple{Any}","page":"Home","title":"Quantics._zero_mpo","text":"Create a MPO with ITensor objects of ElType ComplexF64 filled with zero\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.affinetransform-Tuple{ITensors.ITensorMPS.MPS, AbstractVector{String}, AbstractVector{Dict{String, Int64}}, AbstractVector{Int64}, AbstractVector{Int64}}","page":"Home","title":"Quantics.affinetransform","text":"Construct an MPO representing a selector associated with binary operations.\n\nWe describe the functionality for length(coeffs) = 2 (nsitesbop). In this case, site indices are split into a list of chuncks of nsitesbop sites.\n\nBinary operations are applied to each chunck and the direction of carry is forward (revcarrydirec=true) or backward (revcarrydirec=false).\n\nAssumed revcarrydirec = true, we consider a two-variable g(x, y), which is quantized as x = (x1 ... xR)2, y = (y1 ... yR)_2.\n\nWe now define a new function by binary operations as f(x, y) = g(a * x + b * y + s1, c * x + d * y + s2), where a, b, c, d = +/- 1, 0, and s1, s1 are arbitrary integers.\n\nbc is a vector of boundary conditions for each arguments of g (not of f).\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.automul-Tuple{ITensors.ITensorMPS.MPS, ITensors.ITensorMPS.MPS}","page":"Home","title":"Quantics.automul","text":"By default, elementwise multiplication will be performed.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.binaryop_tensor_multisite-Union{Tuple{T}, Tuple{Array{ITensors.Index{T}, 1}, Vector{Tuple{Int64, Int64}}, Vector{Tuple{Int64, Int64}}, Bool, Bool, Vector{Int64}}} where T<:Number","page":"Home","title":"Quantics.binaryop_tensor_multisite","text":"Create a tensor acting on a vector of sites.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.combinesites-Tuple{ITensors.ITensorMPS.MPO, ITensors.Index, ITensors.Index}","page":"Home","title":"Quantics.combinesites","text":"Contract two adjacent tensors in MPO\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.cumsum-Tuple{Vector{ITensors.Index}}","page":"Home","title":"Quantics.cumsum","text":"Create MPO for cumulative sum in QTT\n\nincludeown = False yi = sum{j=1}^{i-1} x_j\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.decompose_giv-Tuple{Vector{ComplexF64}, Any}","page":"Home","title":"Quantics.decompose_giv","text":"w = (w1 w2, ..., wR)2 In the resultant MPS, the site indices are wR, w{R-1}, ..., w_1 from the left to the right.\n\nsites: indices for w1, ..., wR in this order.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.expqtt-Tuple{Any, Float64}","page":"Home","title":"Quantics.expqtt","text":"Create an MPS representing exp(a*x) on [0, 1) in QTT\n\nexp(-a*x) = prod{n=1}^R exp(a * 2^(-n) * xn)\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.extractdiagonal-Tuple{ITensors.ITensorMPS.AbstractMPS, String}","page":"Home","title":"Quantics.extractdiagonal","text":"Extract diagonal components\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.findallsites_by_tag-Union{Tuple{Array{ITensors.Index{T}, 1}}, Tuple{T}} where T","page":"Home","title":"Quantics.findallsites_by_tag","text":"Find sites with the given tag\n\nFor tag = x, if sites contains an Index object with x, the function returns a vector containing only its positon.\n\nIf not, the function seach for all Index objects with tags x=1, x=2, ..., and return their positions.\n\nIf no Index object is found, an empty vector will be returned.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.flipop-Union{Tuple{Array{ITensors.Index{T}, 1}}, Tuple{T}} where T","page":"Home","title":"Quantics.flipop","text":"This function returns an MPO, M, representing the transformation f(x) = g(2^R-x) where f(x) = M * g(x) for x = 0, 1, ..., 2^R-1.\n\nsites: the sites of the output MPS\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.flipop_to_negativedomain-Union{Tuple{Array{ITensors.Index{T}, 1}}, Tuple{T}} where T","page":"Home","title":"Quantics.flipop_to_negativedomain","text":"This function returns an MPO, M, representing the transformation f(x) = g(-x) where f(x) = M * g(x) for x = 0, 1, ..., 2^R-1.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.forwardmpo-Tuple{Quantics.FTCore, Any}","page":"Home","title":"Quantics.forwardmpo","text":"sites[1] corresponds to the most significant digit. sign = 1\n\n    Y(y) = frac1sqrtN sum_x=0^N-1 X(x) e^s i frac2pi (y + y0) (x + x0)N\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.fouriertransform-Tuple{ITensors.ITensorMPS.MPS}","page":"Home","title":"Quantics.fouriertransform","text":"Perform Fourier transform for a subset of qubit indices.\n\nWe define two integers using the binary format: x = (x_1 x_2  x_R)_2, y = (y_1 y_2  y_R)_2, where the right most digits are the least significant digits.\n\nThe variable x is denoted as src (source), and the variable y is denoted as dst (destination).\n\nOur definition of the Fourier transform is\n\n    Y(y) = frac1sqrtN sum_x=0^N-1 X(x) e^s i frac2pi (y + y_0) (x + x_0)N\n\nwhere s = pm 1, x_0 and y_0 are constants, N=2^R.\n\nsitessrc[1] / sitessrc[end] corresponds to the most/least significant digit of the input. sitesdst[1] / sitesdst[end] corresponds to the most/least significant digit of the output.\n\nsiteinds(M) must contain sitessrc in ascending or descending order. Instead of specifying sitessrc, one can specify the source sites by setting tag. If tag = x, all sites with tags x=1, x=2, ... are used as sitessrc.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.makesitediagonal-Union{Tuple{T}, Tuple{ITensors.ITensorMPS.AbstractMPS, ITensors.Index{T}}} where T","page":"Home","title":"Quantics.makesitediagonal","text":"Makes an MPS/MPO diagonal for a specified a site index s. On return, the data will be deep copied and the target core tensor will be diagonalized with an additional site index s'.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.matchsiteinds-Tuple{Union{ITensors.ITensorMPS.MPO, ITensors.ITensorMPS.MPS}, Any}","page":"Home","title":"Quantics.matchsiteinds","text":"Match MPS/MPO to the given site indices\n\nMPS: The resultant MPS do not depends on the missing site indices.\n\nMPO: For missing site indices, identity operators are inserted.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.onemps-Union{Tuple{T}, Tuple{Type{T}, Any}} where T<:Number","page":"Home","title":"Quantics.onemps","text":"Create a MPS filled with one\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.phase_rotation-Tuple{ITensors.ITensorMPS.MPS, Float64}","page":"Home","title":"Quantics.phase_rotation","text":"Multiply by exp(i θ x), where x = (x1, ..., xR)_2.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.poletomps-Tuple{SparseIR.Fermionic, Any, Any, Any}","page":"Home","title":"Quantics.poletomps","text":"Construct an MPS representing fermionic G(τ) generated by a pole\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.poletomps-Tuple{SparseIR.Statistics, Any, Any, Any}","page":"Home","title":"Quantics.poletomps","text":"Construct an MPS representing G(τ) generated by a pole\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.reverseaxis-Tuple{ITensors.ITensorMPS.MPS}","page":"Home","title":"Quantics.reverseaxis","text":"f(x) = g(N - x) = M * g(x) for x = 0, 1, ..., N-1, where x = 0, 1, ..., N-1 and N = 2^R.\n\nNote that x = 0, 1, 2, ..., N-1 are mapped to x = 0, N-1, N-2, ..., 1 mod N.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.shiftaxis-Tuple{ITensors.ITensorMPS.MPS, Int64}","page":"Home","title":"Quantics.shiftaxis","text":"f(x) = g(x + shift) for x = 0, 1, ..., 2^R-1 and 0 <= shift < 2^R.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.split_tensor-Union{Tuple{T}, Tuple{ITensors.ITensor, Array{Array{ITensors.Index{T}, 1}, 1}}} where T","page":"Home","title":"Quantics.split_tensor","text":"Decompose the given tensor into as the product of tensors by QR\n\nThe externel indices of the results tensors are specified by inds_list.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.tobin!-Tuple{Int64, Vector{Int64}}","page":"Home","title":"Quantics.tobin!","text":"To bits\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.unfuse_siteinds-Union{Tuple{T}, Tuple{ITensors.ITensorMPS.MPS, Array{ITensors.Index{T}, 1}, AbstractArray{Array{ITensors.Index{T}, 1}, 1}}} where T","page":"Home","title":"Quantics.unfuse_siteinds","text":"Un-fuse the site indices of an MPS at the given sites\n\nM: Input MPS where each tensor has only one site index targetsites: Vector of siteinds to be split newsites: Vector of vectors of new siteinds\n\nWhen splitting MPS tensors, the column major is assumed.\n\n\n\n\n\n","category":"method"},{"location":"#Quantics.upper_lower_triangle_matrix-Union{Tuple{S}, Tuple{T}, Tuple{Array{ITensors.Index{T}, 1}, S}} where {T, S}","page":"Home","title":"Quantics.upper_lower_triangle_matrix","text":"Create QTT for a upper/lower triangle matrix filled with one except the diagonal line\n\n\n\n\n\n","category":"method"}]
}
