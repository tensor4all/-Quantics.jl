#__precompile__(false) 

module Quantics

#@everywhere begin
#using Pkg
#Pkg.activate(".")
#Pkg.instantiate()
#end

using ITensors
import ITensors
using ITensors.SiteTypes: siteinds
import ITensors.NDTensors: Tensor, BlockSparseTensor, blockview
using ITensorMPS: MPS, MPO, AbstractMPS
using ITensorMPS: findsite, linkinds, linkind

import SparseIR: Fermionic, Bosonic, Statistics
import LinearAlgebra: I
using StaticArrays

import FastMPOContractions

using EllipsisNotation

function __init__()
end

include("util.jl")
include("tag.jl")
include("binaryop.jl")
include("mul.jl")
include("mps.jl")
include("fouriertransform.jl")
include("imaginarytime.jl")
include("transformer.jl")

end
