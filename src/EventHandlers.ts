import { EntrypointContract } from "../generated/src/Handlers.gen";

EntrypointContract.UserOperationEvent.loader(({ event, context }) => {});

EntrypointContract.UserOperationEvent.handler(({ event, context }) => {
  context.UserOp.set({
    id: `${event.chainId}-${event.params.userOpHash}`,
    hash: event.params.userOpHash,
    chainId: event.chainId,
    txHash: event.transactionHash,
    actualGasCost: event.params.actualGasCost,
    actualGasUsed: event.params.actualGasUsed,
    nonce: event.params.nonce,
    paymaster: event.params.paymaster,
    sender: event.params.sender,
    success: event.params.success,
    entryPoint: event.srcAddress,
  });
});

EntrypointContract.AccountDeployed.loader(({ event, context }) => {});

EntrypointContract.AccountDeployed.handler(({ event, context }) => {
  context.AccountDeployed.set({
    id: `${event.chainId}-${event.params.userOpHash}`,
    hash: event.transactionHash,
    chainId: event.chainId,
    txHash: event.transactionHash,
    factory: event.params.factory,
    paymaster: event.params.paymaster,
    sender: event.params.sender,
    userOpHash: event.params.userOpHash,
    entryPoint: event.srcAddress,
  });
});
