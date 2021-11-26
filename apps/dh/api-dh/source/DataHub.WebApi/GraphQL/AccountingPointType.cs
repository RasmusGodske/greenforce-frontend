// Copyright 2020 Energinet DataHub A/S
//
// Licensed under the Apache License, Version 2.0 (the "License2");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

using GraphQL.Types;

namespace Energinet.DataHub.WebApi.GraphQL
{
    public sealed class AccountingPointType : ObjectGraphType<AccountingPointDto>
    {
        public AccountingPointType()
        {
            Field("Id", h => h.Id).Description("Accounting Point entity identification");
            Field("Gsrn", h => h.GsrnNumber).Description("GSRN number of the accounting point");
            Field("EnergySupplier", h => h.EnergySupplierGln).Description("GLN number identifying the energy supplier");
            Field("Customer", h => h.CustomerName).Description("Name of the customer");
        }
    }
}
